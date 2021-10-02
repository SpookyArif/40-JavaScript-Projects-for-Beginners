'use strict';
const liEl = document.querySelectorAll('li');
const imgEl = document.querySelectorAll('img');

function sliderMove(a) {
  liEl.forEach((li) => li.classList.remove('active'));
  imgEl.forEach((img) => img.classList.remove('active'));

  liEl[a].classList.add('active');
  imgEl[a].classList.add('active');
}

liEl.forEach((value, index) => {
  value.addEventListener('click', () => sliderMove(index));
});
