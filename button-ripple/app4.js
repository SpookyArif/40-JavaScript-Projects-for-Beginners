'use strict';

const btns = document.querySelectorAll('.ripple');

function rippleMe(e) {
  const target = e.target;
  const x = e.clientX;
  const y = e.clientY;
  const left = target.offsetLeft;
  const top = target.offsetTop;

  //create span
  const span = document.createElement('span');
  span.style.top = `${y - top}px`;
  span.style.left = `${x - left}px`;

  target.appendChild(span);
  setTimeout(() => span.remove(), 500);
}

btns.forEach((btn) => {
  btn.addEventListener('click', rippleMe);
});
