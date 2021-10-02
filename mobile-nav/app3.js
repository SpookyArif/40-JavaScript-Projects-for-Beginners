'use strict';
const liEl = document.querySelectorAll('li');
const imgEl = document.querySelectorAll('img');

function liShift(index) {
  liEl.forEach((value) => value.classList.remove('active'));
  imgEl.forEach((img) => img.classList.remove('active'));

  liEl[index].classList.add('active');
  imgEl[index].classList.add('active');
}

liEl.forEach((value, index) => {
  value.addEventListener('click', () => liShift(index));
});
