'use strict';

const guessField = document.querySelector('.guessField');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');
const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const correctNum = document.querySelector('.correct-num');
const lastResult = document.querySelector('.lastResult');

let maxTry = 10;
let prevGuss = [];
let userValue;
let currNum;

function randNum() {
  currNum = Math.floor(Math.random() * 100) + 1;
}

function formNumber(e) {
  e.preventDefault();
  userValue = +guessField.value;
  if (!userValue) return;
  prevGuss.push(userValue);

  guessField.value = '';
  maxTry--;
  lastResult.textContent = maxTry;
  if (maxTry === 0) return gameOver('LOSS');

  showPrevGuss();
  msgShow();
}

function msgShow() {
  if (userValue < currNum) {
    lowOrHi.textContent = `Too low! Try again!`;
  }
  if (userValue > currNum) {
    lowOrHi.textContent = `Too High! Try again!`;
  }
  if (userValue === currNum) {
    gameOver('WIN');
    return;
  }
}
function showPrevGuss() {
  guesses.textContent = prevGuss.join(' , ');
}

function gameOver(res) {
  currNum.textContent = `Your Number was ${currNum}`;
  guessField.setAttribute('disabled', true);
  submit.style.pointerEvents = 'none';
  lowOrHi.textContent = `You ${res} the game try again`;
  setTimeout(() => {
    location.reload();
  }, 4000);
}
randNum();
form.addEventListener('submit', formNumber);
