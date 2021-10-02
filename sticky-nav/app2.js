'use strict';

const header = document.querySelector('.header');
const nav = document.querySelector('nav');

const a = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
});

a.observe(header);

function sticky(entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
