'use strict';

const input = document.querySelector('input');
const cross = document.querySelector('.fa-times');
const eye = document.querySelector('.fa-eye-slash');
const spanCopy = document.querySelector('.copy-it');
const generate = document.querySelector('.fa-sync-alt');
const copy = document.querySelector('.fa-copy');
const passLetters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%';

function toggoleEye() {
  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');

  if (this.classList.contains('fa-eye')) input.type = 'text';
  else input.type = 'password';
}

function generatePass() {
  let tempLetters = '';
  spanCopy.value = '';

  for (let i = 0; i < 16; i++) {
    tempLetters += passLetters.charAt(
      Math.floor(Math.random() * passLetters.length)
    );
  }

  spanCopy.value = tempLetters;
}

function copyPass() {
  if (spanCopy.value !== 'Generate Password...') {
    spanCopy.select();
    document.execCommand('copy');
  }
}

function delPassword() {
  input.value = '';
  input.placeholder = 'Your password...';
}

///////////////
cross.addEventListener('click', delPassword);
eye.addEventListener('click', toggoleEye);
generate.addEventListener('click', generatePass);
copy.addEventListener('click', copyPass);