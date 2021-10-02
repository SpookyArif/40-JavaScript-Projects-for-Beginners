'use strict';
const btnStart = document.querySelector('.start');
const p = document.querySelector('p');
const container = document.querySelector('.container');
const span = document.querySelector('span');
const winLoss = document.querySelector('.win_loss');
const times = document.querySelector('.times');

let counter = 0;
let stop;
const maxSec = 2;

function gameStart() {
  p.classList.add('none');
  container.classList.add('active');
  span.classList.remove('remove');

  createBall();
}

function createBall() {
  const top = rand(window.innerHeight - 200);
  const left = rand(window.innerWidth - 200);

  span.style.top = `${top}px`;
  span.style.left = `${left}px`;

  counterIncrease();
}

function counterIncrease() {
  stop = setInterval(() => {
    counter += 10;
  }, 10);
}

function gameOver() {
  //span remove
  span.classList.add('remove');

  //stop set interval
  clearInterval(stop);

  //calc scores
  counter = (counter / 1000).toFixed(2);

  //hide conatainer
  container.classList.remove('active');
  p.classList.remove('none');

  //show on user

  const res = counter > maxSec ? 'Loss' : 'Win';
  winLoss.textContent = res;
  times.textContent = counter;
  counter = 0;
}

function rand(num) {
  return Math.floor(Math.random() * num);
}

btnStart.addEventListener('click', gameStart);
span.addEventListener('click', gameOver);
