'use strict';

const colors = '0123456789abcdef';
const btns = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');

function colorMade() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * colors.length)];
  }
  return color;
}

function spaceDown(e) {
  if (e.keyCode === 32) {
    const color1 = colorMade();
    const color2 = colorMade();
    const color3 = colorMade();
    const color4 = colorMade();
    const color5 = colorMade();

    const body1 = colorMade();
    const body2 = colorMade();

    btns[0].style.backgroundColor = color1;
    btns[1].style.backgroundColor = color2;
    btns[2].style.backgroundColor = color3;
    btns[3].style.backgroundColor = color4;
    btns[4].style.backgroundColor = color5;

    inputs[0].value = color1;
    inputs[1].value = color2;
    inputs[2].value = color3;
    inputs[3].value = color4;
    inputs[4].value = color5;

    document.body.style.backgroundImage = `linear-gradient(to right, ${body1}, ${body2})`;
  }
}

function copyFun(e) {
  const target = e.target.closest('button').querySelector('input');

  target.select();
  document.execCommand('copy');
}

window.addEventListener('keydown', spaceDown);

btns.forEach((btn) => btn.addEventListener('click', copyFun));
