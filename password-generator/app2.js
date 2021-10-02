const input = document.querySelector('input');
const times = document.querySelector('.fa-times');
const eye = document.querySelector('.fa-eye-slash');
const spanCopy = document.querySelector('.copy-it');
const generet = document.querySelector('.fa-sync-alt');
const copy = document.querySelector('.fa-copy');
const passLeter = 'abcdefghijklmnopqrstuvwzyz0123456789!@#$%^&*()_+=-?/';

function delPass() {
  input.value = '';
  input.placeholder = 'Your password pls...';
}

function eyeToggle() {
  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');

  if (this.classList.contains('fa-eye-slash')) input.type = 'password';
  else input.type = 'text';
}

function passGeneret() {
  temLetter = '';
  spanCopy.value = '';
  for (let a = 0; a < 16; a++) {
    temLetter += passLeter.charAt(Math.floor(Math.random() * passLeter.length));
  }
  spanCopy.value = temLetter;
}

function copyPass() {
  if (spanCopy.value !== 'Generate Password...') {
    spanCopy.select();
    document.execCommand('copy');
  }
}

times.addEventListener('click', delPass);
eye.addEventListener('click', eyeToggle);
generet.addEventListener('click', passGeneret);
copy.addEventListener('click', copyPass);
