'use strict';
///1.dom
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const letters = 'abcdef0123456789';

///2.randomColor()

function randomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

///3.changeBackgroundColor()
function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
  h1.textContent = randomColor();
}

///4.addEventListener.changeBackgroundColor()

button.addEventListener('click', changeBackgroundColor);
