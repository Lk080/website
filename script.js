document.addEventListener('DOMContentLoaded', () => {
const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.menu-item');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const searchInput = document.querySelector('#menu-search');
let activeFilter = 'broodjes';

function showCategory(filter = activeFilter) {
  activeFilter = filter;
  const searchTerm = searchInput.value.trim().toLowerCase();
  items.forEach((item) => {
    const searchableText = item.innerText.toLowerCase();
    const visible = item.dataset.category === filter && searchableText.includes(searchTerm);
    item.classList.toggle('is-hidden', !visible);
    item.setAttribute('aria-hidden', String(!visible));
  });
}

showCategory('broodjes');

const dialog = document.querySelector('#sandwich-dialog');
const form = document.querySelector('#sandwich-form');
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

const euro = (cents) => new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(cents / 100);

function selectedSauce() {
  if (!form.elements.sauce.value) return null;
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

function priceDescription() {
  const size = form.querySelector('[name="size"]:checked');
  if (!size) return 'Kies een formaat om de prijs te zien.';
  const extraCents = [...form.querySelectorAll('[name="extra"]:checked')]
    .reduce((total, input) => total + Number(input.dataset.priceCents), 0);
  const sauceCents = selectedSauce()?.cents ?? 0;
  const hasNotes = form.elements.notes.value.trim();
  const variant = size.value;
  const baseCents = size.dataset.priceCents;
  const total = baseCents === ''
    ? 'Totaal: prijs op aanvraag'
    : `${hasNotes ? 'Subtotaal' : 'Totaal'}: ${euro(Number(baseCents) + extraCents + sauceCents)}`;
  return `${variant}: ${size.dataset.price} · Extra’s: ${euro(extraCents + sauceCents)} · ${total}`
    + (hasNotes ? ' · Eventuele prijswijziging voor je wensen te bevestigen.' : '');
}

function updatePrice() {
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
  const sandwich = item.dataset.category === 'broodjes';
  const name = item.querySelector('h3').textContent;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'sandwich-customize';
  button.textContent = platter ? 'Kies extra’s bij je schotel →' : sandwich ? 'Stel je broodje samen →' : 'Kies en voeg toe →';
  button.setAttribute('aria-label', `${name} samenstellen`);
  button.setAttribute('aria-haspopup', 'dialog');
  item.querySelector('div').append(button);
  item.classList.add('sandwich-clickable');
  item.addEventListener('click', () => {
    opener = button;
    selectedName = name;
    isPlatter = platter;
    form.reset();
    const drink = item.dataset.category === 'dranken';
    extras.querySelectorAll('fieldset, label[for="sandwich-sauce"], .sandwich-help').forEach((element) => { element.hidden = drink; });
    sizes.querySelector('legend').textContent = sandwich ? 'Hoe groot is je goesting?' : 'Kies je variant';
    document.querySelector('#sandwich-title').textContent = name;
    document.querySelector('#sandwich-description').textContent = item.querySelector('p').textContent;
    const options = document.querySelector('#size-options');
    options.replaceChildren();
    const prices = [...item.querySelectorAll('.price-size')].map((price) => price.textContent);
    const sandwichVariants = ['Groot broodje', 'Klein broodje'];
    if (sandwich && item.dataset.smoskePriceCents) {
      const smoskeCents = Number(item.dataset.smoskePriceCents);
      prices.push(`Groot smoske ${euro(smoskeCents)}`, `Klein smoske ${euro(smoskeCents - 50)}`);
      sandwichVariants.push('Groot smoske', 'Klein smoske');
    }
    const variants = isPlatter ? ['Koude schotel'] : sandwich ? sandwichVariants
      : prices.length ? prices.map((price) => price.split('€')[0].trim()) : ['Standaard'];
    singleVariant = variants.length === 1 && item.dataset.category !== 'burgers';
    variants.forEach((size) => {
      const price = isPlatter || (!sandwich && !prices.length) ? item.querySelector('strong').textContent
        : prices.find((text) => text.toLowerCase().startsWith(size.toLowerCase()));
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'size';
      radio.value = size;
      radio.required = true;
      radio.checked = singleVariant;
      const amount = price?.match(/€\s*(\d+),(\d{2})/);
      radio.dataset.price = amount ? amount[0] : 'Prijs op aanvraag';
      radio.dataset.priceCents = amount ? String(Number(amount[1]) * 100 + Number(amount[2])) : '';
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
  const additions = [...form.querySelectorAll('[name="extra"]:checked')]
    .map((input) => `${input.value} (+${euro(Number(input.dataset.priceCents))})`);
  const sauce = selectedSauce();
  if (sauce) additions.push(sauceDescription(sauce));
  summary.replaceChildren();
  [
    isPlatter ? selectedName : `${selectedName} · ${size.value}`,
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

const cart = [];
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
    ...line.extras.map((extra) => `${extra.name} (+${euro(extra.cents)} per stuk)`),
    line.sauce ? sauceDescription(line.sauce) : '',
    line.notes ? `Opmerkingen: ${line.notes}` : '',
    line.baseCents === null ? 'Basisprijs op aanvraag' : `Basisprijs: ${euro(line.baseCents)} per stuk`
  ].filter(Boolean).join('\n');
}

function renderCart() {
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
    name: selectedName,
    variant: size.value,
    baseCents: size.dataset.priceCents === '' ? null : Number(size.dataset.priceCents),
    extras: [...form.querySelectorAll('[name="extra"]:checked')].map((input) => ({ name: input.value, cents: Number(input.dataset.priceCents) })),
    sauce: selectedSauce(),
    notes: form.elements.notes.value.trim(),
    quantity: 1
  });
  renderCart();
  dialog.close();
  document.querySelector('#cart-status').textContent = `${selectedName} toegevoegd aan je winkelmandje.`;
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
    tabs.forEach((button) => {
      const active = button === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', active);
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
