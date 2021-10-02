'use strict';

const allLi = document.querySelectorAll('li');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');

allLi.forEach((value, index) => {
  value.style.marginLeft = `${index * 10}px
	`;
  value.style.transition = `${index * 0.5}s`;
});

function barClk() {
  document.body.classList.add('active');
}
function closeClk() {
  document.body.classList.remove('active');
}

bar.addEventListener('click', barClk);
close.addEventListener('click', closeClk);
