'use strict';
const btnEl = document.querySelector('button');
const containerEl = document.querySelector('.container');
const count = 4;

function creatBox() {
  for (let a = 0; a < count; a++) {
    for (let b = 0; b < count; b++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.backgroundPosition = `${-b * 125}px ${-a * 125}px`;
      containerEl.appendChild(div);
    }
  }
}
creatBox();

function btnCng() {
  containerEl.classList.toggle('big');
  if (containerEl.classList.contains('big')) {
    btnEl.textContent = 'Add Images';
  } else {
    btnEl.textContent = 'Split images';
  }
}

btnEl.addEventListener('click', btnCng);
