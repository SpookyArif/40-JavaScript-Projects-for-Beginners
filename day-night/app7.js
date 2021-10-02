'use strict';
const btnEl = document.querySelector('.btns');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const html = document.querySelector('html');

function toggleBtn() {
  html.classList.toggle('dark');
  h1.textContent = h1.textContent === 'Day Mode' ? 'Night Mode' : 'Day Mode';
  button.textContent =
    button.textContent === 'Night Here...' ? 'Day Here...' : 'Night Here...';
}

[btnEl, button].forEach((el) => {
  el.addEventListener('click', toggleBtn);
});
