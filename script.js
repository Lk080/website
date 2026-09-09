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