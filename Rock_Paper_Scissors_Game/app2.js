'use strict';

const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('img');
const btn = document.querySelector('.btn');
const button = document.querySelectorAll('button');

function computerImage() {
  const random = Math.floor(Math.random() * 3);
  img.forEach((img) => {
    img.style.display = 'none';
  });
  img[random].style.display = 'block';
}

function buttonSelect(e) {
  const target = e.target;
  button.forEach((btn) => {
    btn.classList.remove('active');
    target.classList.add('active');
  });
  computerImage();
}

button.forEach((btn) => {
  btn.addEventListener('click', buttonSelect);
});
