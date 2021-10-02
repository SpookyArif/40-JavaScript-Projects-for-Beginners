'use strict';
const images = document.querySelectorAll('.slider img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentIndex = 0;

function slider(currentIndex) {
  images.forEach((img, ind) => {
    img.style.transform = `translateX(${100 * (ind - currentIndex)}%)`;
  });
}

function nextSlider() {
  if (currentIndex === 0) currentIndex = images.length - 1;
  else currentIndex--;
  slider(currentIndex);
}
function prevSlider() {
  if (currentIndex === images.length - 1) currentIndex = 0;
  else currentIndex++;
  slider(currentIndex);
}

slider(0);

next.addEventListener('click', nextSlider);
prev.addEventListener('click', prevSlider);
