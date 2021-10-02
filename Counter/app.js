'use strict';

const h1 = document.querySelector('h1');
const dec = document.querySelector('.dec');
const res = document.querySelector('.res');
const inc = document.querySelector('.inc');

let num = 0;

function incFun() {
  num++;
  h1.textContent = num;
}
function resFun() {
  num = 0;
  h1.textContent = num;
}
function decFun() {
  if (num === 0) return;
  num--;
  h1.textContent = num;
}

inc.addEventListener('click', incFun);
res.addEventListener('click', resFun);
dec.addEventListener('click', decFun);
