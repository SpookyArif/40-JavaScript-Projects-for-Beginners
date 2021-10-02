'use strict';

const colors = '0123456789abcdef';
const btns = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');

function colorMade() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random * colors.length)];
  }
  displayui(color);
}
