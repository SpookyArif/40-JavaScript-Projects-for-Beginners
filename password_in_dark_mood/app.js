'use strict';
const body = document.querySelector('body');
const span = document.querySelector('span');
const pass = document.querySelector('.pass');
const color = document.querySelector('.color');
const number = '0123456789abcdef#@%$';
const colors = '0123456789abcdef';

function passMake() {
  let tempLetters = '';
  for (let a = 0; a < 6; a++) {
    tempLetters += number.charAt(Math.floor(Math.random() * number.length));
  }

  span.textContent = tempLetters;
}

function colorCng() {
  let tempColors = '';
  for (let a = 0; a < 6; a++) {
    tempColors += colors.charAt(Math.floor(Math.random() * colors.length));
  }

  body.style.backgroundColor = `#${tempColors}`;
}

pass.addEventListener('click', passMake);
color.addEventListener('click', colorCng);
