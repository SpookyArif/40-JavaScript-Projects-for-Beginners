'use strict';

const container = document.querySelector('.container');
const boxes = 1000;

//create boxes & add event listeners
function createBoxes() {
  for (let i = 0; i < boxes; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', function () {
      addColor(div);
    });
    div.addEventListener('mouseleave', function () {
      removeColor(div);
    });
    container.appendChild(div);
  }
}

function randomColor() {
  const letters = '0123456789abcdef';
  let colors = '';

  for (let i = 0; i < 6; i++) {
    colors += letters[Math.trunc(Math.random() * letters.length)];
  }
  return colors;
}

function addColor(div) {
  div.style.backgroundColor = `#${randomColor()}`;
}

function removeColor(div) {
  div.style.backgroundColor = `#1d1d1d`;
}

createBoxes();
