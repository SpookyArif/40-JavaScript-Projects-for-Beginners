'use strict';

const liEl = document.querySelectorAll('li');
const imgEl = document.querySelectorAll('img');

liEl.forEach((li, ind) => {
  li.addEventListener('click', () => liShift(ind));
});

function liShift(index) {
  liEl.forEach((li) => li.classList.remove('active'));
  imgEl.forEach((img) => img.classList.remove('active'));
  liEl[index].classList.add('active');
  imgEl[index].classList.add('active');
}
