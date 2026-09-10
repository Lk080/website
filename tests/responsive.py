# Run with Python and Playwright installed; uses local Google Chrome.
# WhatsApp is intercepted so this test never sends an order.
import sys,json
from pathlib import Path
SITE_URL = (Path(__file__).resolve().parents[1] / "index.html").as_uri()
from playwright.sync_api import sync_playwright
SIZES=[(320,568),(375,667),(390,844),(667,375),(768,1024),(1024,768),(1100,800),(1101,800),(1280,800),(1440,900),(1920,1080),(2560,1440)]
with sync_playwright() as p:
 browser=p.chromium.launch(channel='chrome',headless=True)
 page=browser.new_page()
 errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 def fits(selector):
  assert page.locator(selector).evaluate('(e)=>e.scrollWidth<=e.clientWidth+1'),f'Overflow: {selector}'
 for w,h in SIZES:
  page.set_viewport_size({'width':w,'height':h})
  page.goto(SITE_URL)
  page.emulate_media(reduced_motion='reduce')
  page.evaluate('window.open=(url)=>{window.testWhatsApp=url;return null}')
  for category in ['broodjes','warm','burgers','schotels','dranken']:
   page.locator(f'[data-filter="{category}"]').click()
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),(w,category)
  page.locator('[data-filter="broodjes"]').click()
  page.locator('[data-category="broodjes"] .sandwich-customize').first.click()
  page.locator('[name="size"][value="Groot broodje"]').check()
  page.locator('#sandwich-next').click()
  assert page.locator('#sandwich-dialog').evaluate('(e)=>e.scrollTop')==0
  fits('#sandwich-dialog')
  page.locator('[value="Extra sla"]').check()
  page.locator('#sandwich-sauce').select_option(label='Samurai')
  page.locator('#sauce-portion').select_option('200')
  assert '8,00' in page.locator('#sandwich-price').inner_text()
  if w==320:
   page.locator('#sandwich-dialog').evaluate('(e)=>e.scrollTop=0')
   page.screenshot(path='/private/tmp/piccolo-after-mobile.png')
  page.locator('#sandwich-next').click()
  page.locator('#sandwich-call').click()
  page.locator('#cart-open').click()
  page.get_by_role('button',name='Eén meer: Martino',exact=True).click()
  assert '16,00' in page.locator('#cart-total').inner_text()
  fits('#cart-dialog')
  page.locator('#customer-name').fill('Testklant')
  page.locator('#cart-send').click()
  url=page.evaluate('window.testWhatsApp')
  from urllib.parse import urlparse,parse_qs
  assert url.startswith('https://wa.me/32499262296?text=')
  message=parse_qs(urlparse(url).query)['text'][0]
  assert '2 × Martino' in message and '16,00' in message and 'Groot vierkant potje' in message and 'afhalen' in message
  page.locator('#cart-continue').click()
  page.locator('[data-filter="schotels"]').click()
  page.locator('[data-category="schotels"] .sandwich-customize').first.click()
  assert page.locator('#sandwich-sizes').is_hidden()
  assert page.locator('#sandwich-sauce').input_value()==''
  page.locator('[value="Extra ei"]').check()
  page.locator('#sandwich-notes').fill('Zonder tomaat')
  page.locator('#sandwich-next').click()
  page.locator('#sandwich-call').click()
  page.locator('#cart-open').click()
  assert '24,50' in page.locator('#cart-total').inner_text()
  page.locator('#cart-send').click()
  assert 'Zonder tomaat' in parse_qs(urlparse(page.evaluate('window.testWhatsApp')).query)['text'][0]
  page.get_by_role('button',name='Verwijderen: Martino',exact=True).click()
  assert '8,50' in page.locator('#cart-total').inner_text()
  page.locator('#cart-continue').click()
  page.locator('[data-filter="dranken"]').click()
  page.locator('[data-category="dranken"] .sandwich-customize').first.click()
  assert page.locator('#sandwich-sauce').is_hidden()
  assert page.locator('#sauce-portion-field').is_hidden()
  page.keyboard.press('Escape')
  assert not page.locator('#sandwich-dialog').is_visible()
  page.locator('[data-filter="broodjes"]').click()
  page.locator('#menu-search').fill('Kip de luxe')
  page.locator('.menu-item:not(.is-hidden) .sandwich-customize').click()
  assert page.locator('[name="size"][value$="smoske"]').count()==0
  page.keyboard.press('Escape')
  page.locator('#menu-search').fill('')
  page.goto(SITE_URL)
  page.wait_for_timeout(200)
  if w<=760:
   page.locator('.menu-toggle').click()
   assert page.locator('#site-nav').is_visible()
   page.locator('#site-nav a[href="#menu"]').click()
   assert page.locator('#site-nav').is_hidden()
   assert page.locator('.mobile-order').bounding_box()['x']+page.locator('.mobile-order').bounding_box()['width']<=page.locator('#cart-open').bounding_box()['x']+1
  page.evaluate('window.scrollTo({top:0,behavior:"instant"})')
  page.wait_for_timeout(100)
  if w in [320,1280,2560]: page.screenshot(path=f'/private/tmp/piccolo-layout-{w}.png')
  if w>1100:
   assert page.evaluate('''()=>{let a=document.querySelector('.hero-copy').getBoundingClientRect(),b=document.querySelector('.hero-art').getBoundingClientRect();return a.right<=b.left}''')
  print('PASS',w,h,flush=True)
 assert not errors,errors
 print('Alle schermformaten en bestelstappen geslaagd; WhatsApp onderschept, niets verstuurd.',flush=True)
 browser.close()
