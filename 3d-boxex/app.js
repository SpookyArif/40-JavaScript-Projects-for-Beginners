'use strice';

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

function btnFun() {
  containerEl.classList.toggle('big');
  btnEl.textContent =
    btnEl.textContent === 'Add Images' ? 'Add Images' : 'Split Images';
}

btnEl.addEventListener('click', btnFun);
