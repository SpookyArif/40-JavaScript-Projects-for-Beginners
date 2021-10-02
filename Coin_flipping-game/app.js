'use strict';

/* const btn = document.querySelector('.start');
const container = document.querySelector('.container');

function coinCng() {
  container.innerHTML = '';
  const count = Math.floor(Math.random() * 2);

  container.innerHTML = `<img src="img/${
    count > 0 ? 'head' : 'lail'
  }.png" alt="">`;
}

btn.addEventListener('click', coinCng); */

//////////////////////////////////
const btn = document.querySelector('.start');
const container = document.querySelector('.container');

function coinCng() {
  const count = Math.floor(Math.random() * 2);
  container.innerHTML = `<img src="img/${
    count > 0 ? 'head' : 'lail'
  }.png" alt="">`;
}

btn.addEventListener('click', coinCng);
