'use strict';

const li = document.querySelectorAll('li');
const img = document.querySelectorAll('img');

function sliderMove(index) {
  li.forEach((li) => li.classList.remove('active'));
  img.forEach((img) => img.classList.remove('active'));

  li[index].classList.add('active');
  img[index].classList.add('active');
}

li.forEach((value, index) => {
  value.addEventListener('click', () => sliderMove(index));
});
