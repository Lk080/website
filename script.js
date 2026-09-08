document.addEventListener('DOMContentLoaded', () => {
const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.menu-item');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const searchInput = document.querySelector('#menu-search');
let activeFilter = 'broodjes';

const sandwichPrices = {
  Martino: ['€ 5,70', '€ 7,00'], 'Broodje van het huis': ['€ 6,50', '€ 7,00'], 'Kip de luxe': ['€ 7,00', '€ 8,00'], Italiaans: ['€ 6,50', '€ 7,50'], 'Crispy bacon': ['€ 6,50', '€ 7,50'], 'Gerookte zalm': ['€ 7,00', '€ 8,00'],
  Kaas: ['€ 4,00', '€ 4,50'], Hesp: ['€ 4,00', '€ 5,50'], 'Kaas & hesp': ['€ 5,00', '€ 6,50'], 'Ei-bieslooksla': ['€ 5,00', '€ 6,50'], Brie: ['€ 5,00', '€ 6,50'], 'Préparé': ['€ 5,00', '€ 6,50'], 'Martino special': ['€ 5,70', '€ 7,00'], 'Kip-curry': ['€ 6,00', '€ 7,00'], Aardappelsla: ['€ 5,00', '€ 6,50'], Krabsla: ['€ 5,00', '€ 6,50'], Tonijnsla: ['€ 5,70', '€ 7,00'], Tonijntino: ['€ 6,00', '€ 7,00'], 'Grijze garnaalsla': ['€ 7,00', '€ 8,00'],
  'Broodje croque': ['€ 5,50', '€ 6,50'], 'Broodje croque zalm & brie': ['€ 6,50', '€ 7,50'], 'Italiaanse croque': ['€ 7,00', '€ 8,00'], 'Broodje gezond': ['€ 6,00', '€ 7,00'], 'Vegetarisch broodje gezond': ['€ 6,50', '€ 7,50'], 'Smos kaas & hesp special': ['€ 6,50', '€ 7,50'], 'Zuiderse martino': ['€ 7,00', '€ 8,00'], 'Smos gerookt spek': ['€ 6,50', '€ 7,50'], Boerensmos: ['€ 7,00', '€ 8,00'], 'Club Kip': ['€ 6,50', '€ 7,50'], 'Club special': ['€ 7,00', '€ 8,00'], 'Club Kip Hawaï': ['€ 7,00', '€ 8,00'], 'Club Kip Aardappelsla': ['€ 7,00', '€ 8,00'], Hanniclub: ['€ 7,50', '€ 8,50'], 'Brie & spek & honing': ['€ 7,00', '€ 8,00'], 'Spek & eieren': ['€ 6,50', '€ 7,50'], Andalousiër: ['€ 7,00', '€ 8,00'], 'Spek de luxe': ['€ 7,50', '€ 8,50'], 'Smos Hawaï': ['€ 7,00', '€ 8,00'], 'Gerookte zalm & kruidenkaas': ['€ 7,50', '€ 8,50']
};

document.querySelectorAll('.menu-item[data-category="broodjes"] h3').forEach((title) => {
  const prices = sandwichPrices[title.textContent.trim()];
  if (prices) {
    title.closest('.menu-item').querySelector('strong').innerHTML = `<span style="display:block;font-family:'DM Sans',sans-serif;font-size:11px;line-height:1.7">Klein ${prices[0]}</span><span style="display:block;font-family:'DM Sans',sans-serif;font-size:11px;line-height:1.7">Groot ${prices[1]}</span>`;
  }
});

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

searchInput.addEventListener('input', () => showCategory());

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