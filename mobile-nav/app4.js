'use strict';
const liEl = document.querySelectorAll('li');
const imgEl = document.querySelectorAll('img');

function liShift(a) {
  liEl.forEach((li) => li.classList.remove('active'));
  imgEl.forEach((img) => img.classList.remove('active'));

  liEl[a].classList.add('active');
  imgEl[a].classList.add('active');
}

liEl.forEach((valu, index) => {
  valu.addEventListener('click', () => liShift(index));
});
