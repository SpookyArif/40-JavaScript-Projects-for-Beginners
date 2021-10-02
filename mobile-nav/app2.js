'use strict';
const liEl = document.querySelectorAll('li');
const imgEl = document.querySelectorAll('img');

function liShift(ind) {
  liEl.forEach((value) => value.classList.remove('active'));
  imgEl.forEach((img) => img.classList.remove('active'));

  liEl[ind].classList.add('active');
  imgEl[ind].classList.add('active');
}

liEl.forEach((value, ind) => {
  value.addEventListener('click', () => liShift(ind));
});
