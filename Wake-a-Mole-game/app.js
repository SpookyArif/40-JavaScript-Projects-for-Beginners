'use strict';

const btn = document.querySelector('button');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreEl = document.querySelector('.score');
const timesEl = document.querySelector('.times');

let index;
let score = 0;
let times = 20;
let stopTimes;
let stopeMole;

scoreEl.textContent = 0;
timesEl.textContent = `${times}s`;

function random() {
  index = Math.floor(Math.random() * holes.length);
}

function gameStart() {
  score = 0;
  times = 20;
  scoreEl.textContent = score;
  timesEl.textContent = `${times}s`;
  btn.classList.add('not-active');

  stopTimes = setInterval(() => {
    times--;
    timesEl.textContent = `${times}s`;
    if (times === 0) return gameOver();
  }, 1000);

  stopeMole = setInterval(() => {
    random();
    setTimeout(() => {
      holes[index].classList.add('up');
    }, 100);

    setTimeout(() => {
      holes[index].classList.remove('up');
    }, 1500);
  }, 2000);
}

function gameOver() {
  clearInterval(stopTimes);
  clearInterval(stopeMole);
  btn.classList.remove('not-active');
}

function addScore() {
  console.log(123);
  score++;
  scoreEl.textContent = score;
}

btn.addEventListener('click', gameStart);
moles.forEach((a) => {
  a.addEventListener('click', addScore);
});
