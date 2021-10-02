'use strict';
const btnEl = document.querySelector('button');
const containerEl = document.querySelector('.container');
const count = 4;

function creatBox() {
  for (let a = 0; a < count; a++) {
    for (let b = 0; b < count; b++) {
      const html = `
			<div class="box" style="background-position: ${-b * 125}px  ${
        -a * 125
      }px;"></div>
			`;

      containerEl.insertAdjacentHTML('beforeend', html);
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
