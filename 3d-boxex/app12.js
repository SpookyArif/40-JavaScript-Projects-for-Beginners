'use strict';
const btn = document.querySelector('button');
const container = document.querySelector('.container');
const count = 4;

function creatBox() {
  for (let a = 0; a < count; a++) {
    for (let b = 0; b < count; b++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.backgroundPosition = `${-b * 125}px ${-a * 125}px`;
      container.appendChild(div);
    }
  }
}
creatBox();

function btnCng() {
  container.classList.toggle('big');
  if (container.classList.contains('big')) {
    btn.textContent = 'Add Images';
  } else {
    btn.textContent = 'Splite Images';
  }
}

btn.addEventListener('click', btnCng);
