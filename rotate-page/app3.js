'use strict';

const allLi = document.querySelectorAll('li');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');

allLi.forEach((val, ind) => {
  val.style.marginLeft = `${ind * 10}px`;
  val.style.transition = `${ind * 0.5}s`;
});

function toggle() {
  document.body.classList.toggle('active');
}

[bar, close].forEach((el) => {
  el.addEventListener('click', toggle);
});
