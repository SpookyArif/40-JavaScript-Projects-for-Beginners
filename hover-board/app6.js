'use strict';
const container = document.querySelector('.container');

const boxes = 1000;

function creatBox() {
  for (let i = 0; i < boxes; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', () => addColor(div));
    div.addEventListener('mouseout', () => removeColor(div));
    container.appendChild(div);
  }
}
function rendomColor() {
  const letters = '0123456789abcdef';
  let colors = '';
  for (let i = 0; i < 6; i++) {
    colors += letters[Math.trunc(Math.random() * letters.length)];
  }
  return colors;
}

function addColor(div) {
  div.style.backgroundColor = `#${rendomColor()}`;
}
function removeColor(div) {
  div.style.backgroundColor = `#1d1d1d`;
}

creatBox();
