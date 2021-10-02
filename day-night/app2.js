'use strict';
const html = document.querySelector('html');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const btnsContainerEl = document.querySelector('.btn-container .btns');

function toggleMode() {
  html.classList.toggle('dark');

  h1.textContent = h1.textContent === 'Day Mode' ? 'Night Mode' : 'Day Mode';

  btn.textContent =
    btn.textContent === 'Day Here...' ? 'Night Here...' : 'Day Here...';
}

[btn, btnsContainerEl].forEach((el) =>
  el.addEventListener('click', toggleMode)
);
