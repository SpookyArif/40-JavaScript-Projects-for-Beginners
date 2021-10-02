'use strict';

const imgs = document.querySelectorAll('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
let total = imgs.length - 1;

imgs.forEach((img, ind) => {
  img.style.left = `${ind * 100}%`;
});

function slider(direction) {
  if (direction === 'prev') index--;
  if (direction === 'next') index++;

  if (index < -total + 1) index = 0;
  if (index === 1) index = -total;

  imgs.forEach((img, ind) => {
    img.style.left = `${(index + ind) * 100}%`;
  });
}

prev.addEventListener('click', () => slider('prev'));
next.addEventListener('click', () => slider('next'));
