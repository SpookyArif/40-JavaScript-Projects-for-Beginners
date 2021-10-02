'use strict';
const img = document.querySelectorAll('.slider img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function slider(a) {
  img.forEach((val, ind) => {
    val.style.transform = `translateX(${100 * (ind - a)}%)`;
  });
}
slider(0);

function nextSlider() {
  if (index === 0) index = img.length - 1;
  else index--;
  slider(index);
}

function prevSlider() {
  if (index === img.length - 1) index = 0;
  else index++;
  slider(index);
}

next.addEventListener('click', nextSlider);
prev.addEventListener('click', prevSlider);
