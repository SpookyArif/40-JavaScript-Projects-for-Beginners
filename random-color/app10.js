'use strict';

const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const colors = '0123456789abcdef';

function rendomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colors.charAt(Math.floor(Math.random() * colors.length - 1));
  }
  return color;
}

function cngColor() {
  const bg = rendomColor();
  h1.textContent = bg;
  document.body.style.backgroundColor = bg;
}

button.addEventListener('click', cngColor);
