'use strict';

// const header = document.querySelector('.header');
const header = document.querySelector('.header');
const nav = document.querySelector('nav');

//create observer
const a = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
});

//add observer to an element
a.observe(header);

//call back function for observer
function sticky(entries, observe) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
