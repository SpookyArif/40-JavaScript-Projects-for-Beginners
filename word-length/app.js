'use strict';

// here all the const ::

const input = document.querySelector('input');

const span = document.querySelector('span');

function wordLength(e) {
  if (e.key === 'Enter') {
    const word = input.value.length;
    input.value = '';
    span.textContent = word;
  }
}

// here all addEventListener::

input.addEventListener('keypress', wordLength);
