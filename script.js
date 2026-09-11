document.addEventListener('DOMContentLoaded', async () => {
if (location.protocol === 'http:' || location.protocol === 'https:') {
  try {
    const response = await fetch('/api/weekly', { cache: 'no-store', signal: AbortSignal.timeout(3000) });
    if (response.ok) {
      const weekly = await response.json();
      for (const id of ['89', '60']) {
        const value = weekly[id];
        if (!value || typeof value.name !== 'string' || typeof value.description !== 'string' || !(value.cents === null || (Number.isInteger(value.cents) && value.cents >= 0))) continue;
        const product = PRODUCTS.find(product => product.id === id);
        product.name = value.name; product.description = value.description;
        product.variants[0].cents = value.cents;
      }
    }
  } catch { /* Static previews retain the standard weekly suggestions. */ }
}
const euro = (cents) => new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(cents / 100);
const grid = document.querySelector('.menu-grid');
let previousGroup = '';
PRODUCTS.forEach((product) => {
  const groupKey = `${product.category}:${product.group}`;
  if (groupKey !== previousGroup) {
    const heading = document.createElement('h3');
    heading.className = 'menu-group-title';
    heading.textContent = product.group;
    heading.dataset.group = groupKey;
    grid.append(heading);
    previousGroup = groupKey;
  }
  const item = document.createElement('article');
  item.dataset.group = groupKey;
  item.className = `menu-item${product.featured ? ' featured' : ''}`;
  item.dataset.category = product.category;
  item.dataset.productId = product.id;
  const number = document.createElement('span');
  number.className = 'item-number';
  number.textContent = product.id;
  const copy = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = product.name;
  const description = document.createElement('p');
  description.textContent = product.description;
  copy.append(title, description);
  const prices = document.createElement('strong');
  product.variants.filter(v => !v.name.endsWith('smoske')).forEach((variant, index) => {
    if (index) prices.append(document.createElement('br'));
    const price = document.createElement('span');
    price.className = 'price-size';
    price.textContent = `${variant.name === 'Standaard' || variant.name === 'Koude schotel' ? '' : variant.name + ' '}${variant.cents === null ? 'Prijs op aanvraag' : euro(variant.cents)}`;
    prices.append(price);
  });
  item.append(number, copy, prices);
  if (product.featured) {
    const badge = document.createElement('span'); badge.className = 'badge';
    badge.textContent = 'Piccolo favoriet'; item.append(badge);
  }
  grid.append(item);
});

const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.menu-item');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const searchInput = document.querySelector('#menu-search');
let activeFilter = 'broodjes';

function showCategory(filter = activeFilter) {
  activeFilter = filter;
  const searchTerm = searchInput.value.trim().toLowerCase();
  let count = 0;
  items.forEach((item) => {
    const searchableText = item.textContent.toLowerCase();
    const visible = searchTerm ? searchableText.includes(searchTerm) : item.dataset.category === filter;
    if (visible) count++;
    item.classList.toggle('is-hidden', !visible);
    item.setAttribute('aria-hidden', String(!visible));
  });
  document.querySelectorAll('.menu-group-title').forEach(heading => {
    heading.hidden = ![...items].some(item => item.dataset.group === heading.dataset.group && !item.classList.contains('is-hidden'));
  });
  tabs.forEach(tab => {
    const active = !searchTerm && tab.dataset.filter === filter;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  const results = document.querySelector('#menu-results');
  results.hidden = !searchTerm;
  results.textContent = count ? `${count} resultaten in het volledige menu.` : 'Geen gerechten gevonden. Probeer een andere naam of ingrediënt.';
}

showCategory('broodjes');

const dialog = document.querySelector('#sandwich-dialog');
const form = document.querySelector('#sandwich-form');
const defaultNotesPlaceholder = form.elements.notes.placeholder;
const sizes = document.querySelector('#sandwich-sizes');
const extras = document.querySelector('#sandwich-extras');
const summary = document.querySelector('#sandwich-summary');
const next = document.querySelector('#sandwich-next');
const back = document.querySelector('#sandwich-back');
const call = document.querySelector('#sandwich-call');
let step = 1;
let selectedName = '';
let isPlatter = false;
let singleVariant = false;
let opener;
let selectedProduct;
function selectedSide() { return selectedProduct?.sideChoice ? form.elements.side.value : ''; }
let selectedQuantity = 1;
let isSandwich = false;
const quantityMinus = document.querySelector('#quantity-minus');
const quantityPlus = document.querySelector('#quantity-plus');

function changeQuantity(value) {
  selectedQuantity = Math.max(1, Math.min(99, value));
  document.querySelector('#sandwich-quantity').value = String(selectedQuantity);
  quantityMinus.disabled = selectedQuantity === 1;
  quantityPlus.disabled = selectedQuantity === 99;
  updatePrice();
}
quantityMinus.addEventListener('click', () => changeQuantity(selectedQuantity - 1));
quantityPlus.addEventListener('click', () => changeQuantity(selectedQuantity + 1));



function selectedSauce() {
  if (form.elements.sauce.disabled || !form.elements.sauce.value) return null;
  const portion = form.elements.saucePortion;
  return {
    name: form.elements.sauce.value,
    portion: portion.selectedOptions[0].textContent.split(' (+')[0],
    cents: Number(portion.value)
  };
}

function sauceDescription(sauce) {
  return `${sauce.name} · ${sauce.portion} (+${euro(sauce.cents)} per stuk)`;
}

function selectedBread() {
  return selectedProduct?.breadChoice ? form.elements.bread.value : '';
}

function priceDescription() {
  const size = form.querySelector('[name="size"]:checked');
  if (!size) return 'Kies een formaat om de prijs te zien.';
  const extraCents = [...form.querySelectorAll('[name="extra"]:checked:not(:disabled)')]
    .reduce((total, input) => total + Number(input.dataset.priceCents), 0);
  const sauceCents = selectedSauce()?.cents ?? 0;
  const hasNotes = form.elements.notes.value.trim();
  const variant = size.value;
  const baseCents = size.dataset.priceCents;
  const total = baseCents === ''
    ? 'Totaal: prijs op aanvraag'
    : `${hasNotes ? 'Subtotaal' : 'Totaal'} (${selectedQuantity} ×): ${euro((Number(baseCents) + extraCents + sauceCents) * selectedQuantity)}`;
  return `${variant}: ${size.dataset.price} · Extra’s: ${euro(extraCents + sauceCents)} · ${total}`
    + (hasNotes ? ' · Eventuele prijswijziging voor je wensen te bevestigen.' : '');
}

function updatePrice() {
  document.querySelector('#bread-field').hidden = !selectedBread();
  document.querySelector('#sauce-portion-field').hidden = !form.elements.sauce.value;
  document.querySelector('#sandwich-price').textContent = priceDescription();
}
form.addEventListener('input', updatePrice);
form.addEventListener('change', updatePrice);

function setStep(value) {
  step = value;
  sizes.hidden = step !== 1;
  extras.hidden = step !== 2;
  summary.hidden = step !== 3;
  back.hidden = step === 1 || (singleVariant && step === 2);
  next.hidden = step === 3;
  call.hidden = step !== 3;
  document.querySelector('#sandwich-step').textContent = step === 3
    ? 'Jouw samenstelling' : singleVariant ? 'Kies je extra’s en opmerkingen' : `Stap ${step} van 2 · ${step === 1 ? 'Maak je keuze' : 'Extra’s en opmerkingen'}`;
  next.textContent = step === 1 ? 'Verder →' : 'Bekijk mijn keuze →';
}

function focusStep() {
  const heading = document.querySelector('#sandwich-step');
  heading.tabIndex = -1;
  heading.focus({ preventScroll: true });
  dialog.scrollTop = 0;
}

items.forEach((item) => {
  const platter = item.dataset.category === 'schotels';
  const sandwich = PRODUCTS.find(product => product.id === item.dataset.productId).breadChoice;
  const product = PRODUCTS.find(product => product.id === item.dataset.productId);
  const name = product.name;
  const quickAdd = product.category === 'dranken' && product.variants.length === 1 && !name.toLowerCase().includes('koffie');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'sandwich-customize';
  button.textContent = quickAdd ? 'Toevoegen +' : platter ? 'Kies extra’s bij je schotel →' : sandwich ? 'Stel je broodje samen →' : 'Kies en voeg toe →';
  button.setAttribute('aria-label', quickAdd ? `${name} toevoegen` : `${name} samenstellen`);
  if (!quickAdd) button.setAttribute('aria-haspopup', 'dialog');
  item.querySelector('div').append(button);
  item.classList.add('sandwich-clickable');
  item.addEventListener('click', () => {
    if (quickAdd) {
      cart.push({ productId: product.id, name, variant: product.variants[0].name, baseCents: product.variants[0].cents, bread: '', side: '', extras: [], sauce: null, notes: '', quantity: 1 });
      renderCart();
      document.querySelector('#cart-status').textContent = `1 × ${name} toegevoegd aan je winkelmandje.`;
      return;
    }
    selectedProduct = product;
    opener = button;
    selectedName = name;
    isPlatter = platter;
    isSandwich = sandwich;
    form.reset();
    document.querySelector('#side-field').hidden = !product.sideChoice;
    form.elements.side.required = product.sideChoice;
    changeQuantity(1);
    const drink = item.dataset.category === 'dranken';
    const coffee = drink && name.toLowerCase().includes('koffie');
    const spaghetti = product.extrasMode === 'spaghetti';
    form.elements.notes.closest('label').hidden = spaghetti || (drink && !coffee);
    form.elements.notes.placeholder = coffee
      ? 'Bijvoorbeeld: zonder melk, zonder suiker'
      : defaultNotesPlaceholder;
    extras.querySelectorAll('fieldset, label[for="sandwich-sauce"], .sandwich-help').forEach((element) => {
      const cheese = element.id === 'spaghetti-extra';
      element.hidden = cheese ? !spaghetti : drink || spaghetti;
      if (element.tagName === 'FIELDSET') element.disabled = element.hidden;
    });
    form.elements.sauce.disabled = drink || spaghetti;
    sizes.querySelector('legend').textContent = sandwich ? 'Hoe groot is je goesting?' : 'Kies je variant';
    document.querySelector('#sandwich-title').textContent = name;
    document.querySelector('#sandwich-description').textContent = item.querySelector('p').textContent;
    const options = document.querySelector('#size-options');
    options.replaceChildren();
    singleVariant = product.variants.length === 1 && product.category !== 'burgers';
    product.variants.forEach((variant) => {
      const size = variant.name;
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'size';
      radio.value = size;
      radio.required = true;
      radio.checked = singleVariant;
      radio.dataset.price = variant.cents === null ? 'Prijs op aanvraag' : euro(variant.cents);
      radio.dataset.priceCents = variant.cents === null ? '' : String(variant.cents);
      const text = document.createElement('span');
      text.textContent = size;
      if (item.dataset.category === 'burgers') {
        const burgerDescriptions = {
          enkel: '1 hamburger op pistolet',
          big: '2 hamburgers op pistolet',
          super: '2 hamburgers op een lang broodje'
        };
        const description = burgerDescriptions[size.toLowerCase()];
        if (description) text.textContent = `${size} — ${description}`;
      }
      const detail = document.createElement('small');
      detail.textContent = radio.dataset.price;
      text.append(detail);
      label.append(radio, text);
      options.append(label);
    });
    setStep(singleVariant ? 2 : 1);
    updatePrice();
    dialog.showModal();
    focusStep();
    document.body.classList.add('sandwich-open');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (step === 1) {
    setStep(2);
    focusStep();
    return;
  }
  const size = form.querySelector('[name="size"]:checked');
  const additions = [...form.querySelectorAll('[name="extra"]:checked:not(:disabled)')]
    .map((input) => `${input.value} (+${euro(Number(input.dataset.priceCents))})`);
  const sauce = selectedSauce();
  if (sauce) additions.push(sauceDescription(sauce));
  summary.replaceChildren();
  [
    isPlatter ? selectedName : `${selectedName} · ${size.value}`,
    selectedBread(),
    selectedSide(),
    additions.length ? additions.join(', ') : 'Geen extra’s',
    form.elements.notes.value.trim() ? `Opmerkingen: ${form.elements.notes.value.trim()}` : '',
    'Voeg deze keuze toe aan je winkelmandje en bestel daarna via WhatsApp.'
  ].filter(Boolean).forEach((text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    summary.append(paragraph);
  });
  setStep(3);
  call.focus();
});
back.addEventListener('click', () => {
  setStep(step - 1);
  focusStep();
});
dialog.querySelector('.sandwich-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('sandwich-open');
  opener?.focus();
});

searchInput.addEventListener('input', () => showCategory());
const weeklyCards = document.querySelector('#weekly-cards');
PRODUCTS.filter(product => product.weekly).forEach(product => {
  const card = document.createElement('article'); card.className = 'weekly-card';
  const label = document.createElement('p'); label.className = 'eyebrow'; label.textContent = product.id === '89' ? 'Broodje van de week' : 'Salade van de week';
  const heading = document.createElement('h3'); heading.textContent = product.name;
  const description = document.createElement('p'); description.textContent = product.description;
  const price = document.createElement('strong'); price.textContent = product.variants[0].cents === null ? 'Vraag naar het aanbod en de prijs' : euro(product.variants[0].cents);
  const button = document.createElement('button'); button.type = 'button'; button.className = 'button button-dark'; button.textContent = 'Kies deze weeksuggestie';
  button.addEventListener('click', () => {
    searchInput.value = ''; showCategory(product.category);
    document.querySelector(`[data-product-id="${product.id}"] .sandwich-customize`).click();
  });
  card.append(label, heading, description, price, button); weeklyCards.append(card);
});

const CART_KEY = 'piccolo-cart-v1';
const CART_TTL = 24 * 60 * 60 * 1000;
function restoreCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    if (!saved || !Number.isFinite(saved.updatedAt) || Date.now() - saved.updatedAt > CART_TTL || !Array.isArray(saved.items)) return [];
    return saved.items.filter(line => {
      const product = PRODUCTS.find(product => product.id === line.productId);
      const variant = product?.variants.find(variant => variant.name === line.variant);
      return variant && line.baseCents === variant.cents && line.name === product.name
        && Number.isInteger(line.quantity) && line.quantity >= 1 && line.quantity <= 99
        && ['bread', 'side', 'notes'].every(key => typeof line[key] === 'string')
        && Array.isArray(line.extras) && line.extras.every(extra => typeof extra.name === 'string' && Number.isInteger(extra.cents) && extra.cents >= 0)
        && (line.sauce === null || (typeof line.sauce?.name === 'string' && typeof line.sauce.portion === 'string' && Number.isInteger(line.sauce.cents) && line.sauce.cents >= 0));
    });
  } catch { return []; }
}
const cart = restoreCart();
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify({ updatedAt: Date.now(), items: cart })); }
  catch { /* Ordering remains available when browser storage is disabled. */ }
}
const cartDialog = document.querySelector('#cart-dialog');
const cartOpen = document.querySelector('#cart-open');
const cartItems = document.querySelector('#cart-items');
const checkout = document.querySelector('#cart-checkout');

function linePrice(line) {
  return ((line.baseCents ?? 0) + line.extras.reduce((sum, extra) => sum + extra.cents, 0) + (line.sauce?.cents ?? 0)) * line.quantity;
}

function cartTotal() {
  const incomplete = cart.some((line) => line.baseCents === null || line.notes);
  const amount = euro(cart.reduce((sum, line) => sum + linePrice(line), 0));
  return incomplete ? `Bekend subtotaal: ${amount} · Totaal te bevestigen (prijzen op aanvraag of opmerkingen).` : `Totaal: ${amount}`;
}

function lineDetails(line) {
  return [
    line.variant,
    line.bread,
    line.side ? `Bijgerecht: ${line.side}` : '',
    ...line.extras.map((extra) => `${extra.name} (+${euro(extra.cents)} per stuk)`),
    line.sauce ? sauceDescription(line.sauce) : '',
    line.notes ? `Opmerkingen: ${line.notes}` : '',
    line.baseCents === null ? 'Basisprijs op aanvraag' : `Basisprijs: ${euro(line.baseCents)} per stuk`
  ].filter(Boolean).join('\n');
}

function renderCart() {
  saveCart();
  cartOpen.textContent = `Winkelmandje (${cart.reduce((sum, line) => sum + line.quantity, 0)})`;
  cartItems.replaceChildren();
  checkout.hidden = cart.length === 0;
  document.querySelector('#cart-total').hidden = cart.length === 0;
  document.querySelector('#cart-total').textContent = cartTotal();
  if (!cart.length) {
    cartItems.textContent = 'Je winkelmandje is nog leeg. Kies iets lekkers uit het menu.';
    return;
  }
  cart.forEach((line, index) => {
    const row = document.createElement('article');
    row.className = 'cart-item';
    const title = document.createElement('h3');
    title.textContent = line.name;
    const details = document.createElement('p');
    details.textContent = lineDetails(line);
    const price = document.createElement('p');
    price.textContent = `${line.baseCents === null || line.notes ? 'Bekend subtotaal' : 'Prijs'}: ${euro(linePrice(line))}`;
    const controls = document.createElement('div');
    controls.className = 'cart-controls';
    const quantity = document.createElement('span');
    quantity.textContent = `${line.quantity} ×`;
    function control(label, accessibleName, action, disabled = false) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.setAttribute('aria-label', `${accessibleName}: ${line.name}`);
      button.disabled = disabled;
      button.addEventListener('click', () => {
        action();
        renderCart();
        const updated = cartItems.children[Math.min(index, cart.length - 1)];
        const target = updated && [...updated.querySelectorAll('button')].find((candidate) => candidate.textContent === label && !candidate.disabled);
        (target || updated?.querySelector('button:not(:disabled)') || document.querySelector('#cart-continue')).focus();
      });
      return button;
    }
    controls.append(
      control('−', 'Eén minder', () => { line.quantity--; }, line.quantity === 1),
      quantity,
      control('+', 'Eén meer', () => { line.quantity++; }, line.quantity === 99),
      control('Verwijderen', 'Verwijderen', () => cart.splice(index, 1))
    );
    row.append(title, details, price, controls);
    cartItems.append(row);
  });
}

call.addEventListener('click', () => {
  const size = form.querySelector('[name="size"]:checked');
  if (!size) return;
  cart.push({
    productId: selectedProduct.id,
    side: selectedSide(),
    name: selectedName,
    variant: size.value,
    bread: selectedBread(),
    baseCents: size.dataset.priceCents === '' ? null : Number(size.dataset.priceCents),
    extras: [...form.querySelectorAll('[name="extra"]:checked:not(:disabled)')].map((input) => ({ name: input.value, cents: Number(input.dataset.priceCents) })),
    sauce: selectedSauce(),
    notes: form.elements.notes.value.trim(),
    quantity: selectedQuantity
  });
  renderCart();
  dialog.close();
  document.querySelector('#cart-status').textContent = `${selectedQuantity} × ${selectedName} toegevoegd aan je winkelmandje.`;
});

cartOpen.addEventListener('click', () => {
  renderCart();
  cartDialog.showModal();
  document.body.classList.add('sandwich-open');
});
cartDialog.querySelector('.sandwich-close').addEventListener('click', () => cartDialog.close());
document.querySelector('#cart-continue').addEventListener('click', () => cartDialog.close());
cartDialog.addEventListener('close', () => {
  document.body.classList.remove('sandwich-open');
  cartOpen.focus();
});
checkout.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!cart.length) return;
  const name = checkout.elements.customer.value.trim();
  if (!name) {
    checkout.elements.customer.setCustomValidity('Vul je naam in.');
    checkout.elements.customer.reportValidity();
    return;
  }
  const message = [
    'Hallo Piccolo! Ik wil graag bestellen om af te halen.',
    `Naam: ${name}`,
    ...cart.map((line, index) => `\n${index + 1}. ${line.quantity} × ${line.name}\n${lineDetails(line)}\n${line.baseCents === null || line.notes ? 'Bekend subtotaal' : 'Prijs'}: ${euro(linePrice(line))}`),
    `\n${cartTotal()}`,
    '\nKunnen jullie mijn bestelling bevestigen en laten weten hoe laat ik ze kan afhalen?'
  ].join('\n');
  window.open(`https://wa.me/32499262296?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
checkout.elements.customer.addEventListener('input', () => checkout.elements.customer.setCustomValidity(''));
renderCart();

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    searchInput.value = '';
    tabs.forEach((button) => {
      const active = button === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active);
    });
    showCategory(filter);
  });
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
});
