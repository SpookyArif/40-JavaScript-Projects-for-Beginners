'use strict';
const images = document.querySelectorAll('.slider img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function slider(index) {
  images.forEach((val, ind) => {
    val.style.transform = `translateX(${100 * (ind - index)}%)`;
  });
}

slider(0);

function nextSlider() {
  if (index === 0) index = images.length - 1;
  else index--;
  slider(index);
}

function prevSlider() {
  if (index === images.length - 1) index = 0;
  else index++;
  slider(index);
}

next.addEventListener('click', nextSlider);
prev.addEventListener('click', prevSlider);
