import http from 'node:http';
import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.dirname(fileURLToPath(import.meta.url));
const dataDir = process.env.PICCOLO_DATA_DIR || path.join(root, '.piccolo-data');
await mkdir(dataDir, { recursive: true, mode: 0o700 });
const adminFile = path.join(dataDir, 'admin.json');
const weeklyFile = path.join(dataDir, 'weekly.json');
const sessions = new Map();
const attempts = new Map();
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 8080);
async function readJSON(file) { try { return JSON.parse(await readFile(file, 'utf8')); } catch (error) { if (error.code === 'ENOENT') return null; throw error; } }
async function saveJSON(file, data) { await writeFile(file + '.tmp', JSON.stringify(data, null, 2), { mode: 0o600 }); await rename(file + '.tmp', file); }
function validWeekly(data) {
 return data && Object.keys(data).sort().join(',') === '60,89' && ['60','89'].every(id => {
 const item = data[id];
 return item && typeof item.name === 'string' && item.name.trim().length > 0 && item.name.length <= 100 && typeof item.description === 'string' && item.description.trim().length > 0 && item.description.length <= 600 && (item.cents === null || (Number.isInteger(item.cents) && item.cents >= 0 && item.cents <= 100000));
 });
}
const publicFiles = new Set(['index.html','script.js','styles.css','products.js','admin.html','admin.js','admin.css','logo.png','piccolo-hero-landscape.png','piccolo-story-landscape.png','piccolo-gallery-martino.png','piccolo-gallery-gezond.png','piccolo-gallery-tonijn.png']);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png'};
http.createServer(async(req,res)=>{
 const reply=(status,value)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(value));};
 try {
 const url=new URL(req.url,'http://localhost');
 if (!url.pathname.startsWith('/api/')) {
  if(req.method!=='GET' && req.method!=='HEAD')return reply(405,{error:'Niet toegestaan.'});
  const file=url.pathname==='/'?'index.html':url.pathname==='/admin'?'admin.html':url.pathname.slice(1);
  if(!publicFiles.has(file))return reply(404,{error:'Niet gevonden.'});
  const body=await readFile(path.join(root,file));res.writeHead(200,{'Content-Type':mime[path.extname(file)],'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});return res.end(req.method==='HEAD'?undefined:body);
 }
 const local=['127.0.0.1','::1','::ffff:127.0.0.1'].includes(req.socket.remoteAddress) && /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(req.headers.host || '');
 const admin=await readJSON(adminFile);
 const token=(req.headers.cookie||'').split('; ').find(c=>c.startsWith('piccolo_session='))?.split('=')[1];
 const authenticated=token && sessions.get(token)>Date.now();
 if(req.method==='GET' && url.pathname==='/api/weekly')return reply(200,await readJSON(weeklyFile)||{});
 if(req.method==='GET' && url.pathname==='/api/session')return reply(200,{authenticated:!!authenticated,setup:!admin && local});
 if(!['POST','PUT'].includes(req.method))return reply(405,{error:'Niet toegestaan.'});
 const origin=req.headers.origin;
 if(!origin || new URL(origin).host!==req.headers.host)return reply(403,{error:'Ongeldige aanvraag.'});
 let raw=''; for await(const chunk of req){raw+=chunk;if(Buffer.byteLength(raw)>10000)return reply(413,{error:'Te veel gegevens.'});}
 let body;try{body=JSON.parse(raw||'{}');}catch{return reply(400,{error:'Ongeldige gegevens.'});}
 if(url.pathname==='/api/login' || url.pathname==='/api/setup') {
  const ip=req.socket.remoteAddress; const rate=attempts.get(ip)||{count:0,until:Date.now()+900000};
  if(rate.until<Date.now()){rate.count=0;rate.until=Date.now()+900000;}
  if(rate.count>=10)return reply(429,{error:'Te veel pogingen. Probeer over 15 minuten opnieuw.'});
  rate.count++;attempts.set(ip,rate);
  if(typeof body.password!=='string' || body.password.length>200)return reply(400,{error:'Ongeldig wachtwoord.'});
  if(url.pathname==='/api/setup') {
   if(admin || !local)return reply(403,{error:'Instellen kan alleen eenmalig op deze computer.'});
   if(body.password.length<12)return reply(400,{error:'Gebruik minstens 12 tekens.'});
   const salt=randomBytes(16).toString('hex');await saveJSON(adminFile,{salt,hash:scryptSync(body.password,salt,64).toString('hex')});
  } else if(!admin || !timingSafeEqual(scryptSync(body.password,admin.salt,64),Buffer.from(admin.hash,'hex')))return reply(401,{error:'Wachtwoord klopt niet.'});
  attempts.delete(ip);const session=randomBytes(32).toString('hex');sessions.set(session,Date.now()+8*3600000);
  res.setHeader('Set-Cookie',`piccolo_session=${session}; HttpOnly; SameSite=Strict; Path=/api; Max-Age=28800${process.env.NODE_ENV==='production'?'; Secure':''}`);
  return reply(200,{ok:true});
 }
 if(!authenticated)return reply(401,{error:'Log opnieuw in.'});
 if(url.pathname==='/api/logout'){sessions.delete(token);res.setHeader('Set-Cookie','piccolo_session=; HttpOnly; SameSite=Strict; Path=/api; Max-Age=0');return reply(200,{ok:true});}
 if(url.pathname==='/api/weekly' && req.method==='PUT') {
  if(!validWeekly(body))return reply(400,{error:'Controleer de namen, omschrijvingen en prijzen.'});
  await saveJSON(weeklyFile,body);return reply(200,{ok:true});
 }
 return reply(404,{error:'Niet gevonden.'});
 }catch(error){console.error(error.message);if(!res.headersSent)reply(500,{error:'Opslaan lukt niet. Probeer opnieuw.'});else res.end();}
}).listen(port,host,()=>console.log(`Piccolo: http://${host}:${port}\nBeheer: http://${host}:${port}/admin`));
