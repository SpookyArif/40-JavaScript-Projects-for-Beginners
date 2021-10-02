'use strict';

const btnsEl = document.querySelectorAll('.ripple');

btnsEl.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const left = this.offsetLeft;
    const top = this.offsetTop;
    //creat span
    const span = document.createElement('span');
    span.style.left = `${x - left}px`;
    span.style.top = `${y - top}px`;
    this.appendChild(span);
    setTimeout(() => span.remove(), 500);
  });
});
