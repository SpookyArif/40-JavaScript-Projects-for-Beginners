'use strict';

const html = document.querySelector('html');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const btns = document.querySelector('.btns');

function btnToggle() {
  html.classList.toggle('dark');
  h1.textContent = h1.textContent === 'Day Mode' ? 'Night Mode' : 'Day Mode';
  btn.textContent =
    btn.textContent === 'Night Here...' ? 'Day Here...' : 'Night Here...';
}

btn.addEventListener('click', btnToggle);
btns.addEventListener('click', btnToggle);
