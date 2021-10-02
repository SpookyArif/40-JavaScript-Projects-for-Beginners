'use strict';

const nav = document.querySelectorAll('nav');

nav.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.tagName === 'A') {
      const goTo = target.getAttribute('href').replace('#', '');
      document.getElementById(`${goTo}`).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
