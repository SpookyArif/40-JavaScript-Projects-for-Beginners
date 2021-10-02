'use strict';

const btns = document.querySelectorAll('.ripple');

function btnRipple(a) {
  const target = a.target;
  const x = a.clientX;
  const y = a.clientY;
  const left = target.offsetLeft;
  const top = target.offsetTop;
  const span = document.createElement('span');
  span.style.top = `${y - top}px`;
  span.style.left = `${x - left}px`;
  target.appendChild(span);
  setTimeout(() => span.remove(), 500);
}

btns.forEach((a) => {
  a.addEventListener('click', btnRipple);
});
