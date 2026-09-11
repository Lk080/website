const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 for (const width of [320,375,390,667,768,1024,1100,1101,1280,1440,1920,2560]) {
  const context = await browser.newContext({ viewport:{width,height:900}, reducedMotion:'reduce' });
  const page = await context.newPage(); const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
  const search=page.locator('#menu-search');
  await search.fill('Cola');
  assert(await page.locator('.menu-item:not(.is-hidden)').filter({has:page.getByRole('heading',{name:'Cola Zero',exact:true})}).isVisible());
  await search.fill('nietsbestaatxyz');
  assert.match(await page.locator('#menu-results').innerText(),/Geen gerechten/);
  await page.locator('[data-filter="dranken"]').click();
  assert.equal(await search.inputValue(),'');
  await page.locator('.menu-item').filter({has:page.getByRole('heading',{name:'Fanta',exact:true})}).getByRole('button').click();
  assert.equal(await page.locator('#sandwich-dialog').isVisible(),false);
  assert.match(await page.locator('#cart-open').innerText(),/\(1\)/);
  await page.reload();
  assert.match(await page.locator('#cart-open').innerText(),/\(1\)/);
  await page.locator('[data-filter="broodjes"]').click();
  await page.locator('.menu-item').filter({has:page.getByRole('heading',{name:'Martino',exact:true})}).getByRole('button').click();
  await page.locator('[name="size"][value="Groot broodje"]').check();
  await page.locator('#sandwich-next').click();
  await page.locator('[value="Extra sla"]').check();
  await page.locator('#sandwich-sauce').selectOption({label:'Samurai'});
  await page.locator('#sauce-portion').selectOption('200');
  assert.match(await page.locator('#sandwich-price').innerText(),/8,00/);
  await page.locator('#sandwich-next').click(); await page.locator('#sandwich-call').click();
  await page.locator('[data-filter="schotels"]').click();
  await page.locator('[data-product-id="97"] button').click();
  await page.locator('#sandwich-next').click();
  assert.equal(await page.locator('#sandwich-summary').isVisible(),false);
  await page.locator('#sandwich-side').selectOption('Aardappelsla');
  await page.locator('#sandwich-next').click();
  assert.match(await page.locator('#sandwich-summary').innerText(),/Aardappelsla/);
  await page.locator('#sandwich-call').click(); await page.reload();
  await page.locator('#cart-open').click();
  assert.match(await page.locator('#cart-total').innerText(),/18,20/);
  await page.locator('#customer-name').fill('Test');
  await page.evaluate(()=>window.open=(url)=>{window.testUrl=url;return null});
  await page.locator('#cart-send').click();
  const message=new URL(await page.evaluate(()=>window.testUrl)).searchParams.get('text');
  assert.match(message,/Bijgerecht: Aardappelsla/); assert.match(message,/18,20/);
  await page.locator('#cart-continue').click();
  for(const category of ['broodjes','croques','warm','burgers','schotels','dranken']) {
   await page.locator(`[data-filter="${category}"]`).click();
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   const layout = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('.menu-item:not(.is-hidden)')];
    const first = cards[0]?.getBoundingClientRect();
    const second = cards[1]?.getBoundingClientRect();
    return { paired: first && second && Math.abs(first.top-second.top)<2 && second.left>first.left,
      groupsValid: [...document.querySelectorAll('.menu-group-title:not([hidden])')].every(heading => {
       let item=heading.nextElementSibling;
       return item && !item.classList.contains('is-hidden') && item.dataset.group===heading.dataset.group;
      }) };
   });
   assert(layout.groupsValid, `Grouping at ${width}, ${category}`);
   if (category==='croques') assert.equal(Boolean(layout.paired),width>1100);
   if (category==='croques' && [390,1280].includes(width)) {
    await page.locator('#menu').scrollIntoViewIfNeeded();
    await page.screenshot({path:`/private/tmp/piccolo-menu-${width}.png`});
   }
  }
  await page.evaluate(()=>scrollTo(0,0));
  if([390,1280].includes(width)) await page.screenshot({path:`/private/tmp/piccolo-updated-${width}.png`});
  await page.evaluate(()=>localStorage.setItem('piccolo-cart-v1','broken'));
  await page.reload(); assert.match(await page.locator('#cart-open').innerText(),/\(0\)/);
  assert.deepEqual(errors,[]); console.log('PASS',width); await context.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
