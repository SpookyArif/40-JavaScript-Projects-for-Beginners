'use strict';

const kg = document.getElementById('kg');
const pound = document.getElementById('pound');
const h1 = document.querySelector('h1');

function kgtoPound() {
  const kgValue = +kg.value;
  pound.value = kgValue * 2.20462;
  h1.textContent = 'Kg to Pound';
}

function poundtokG() {
  const poundValue = +pound.value;
  kg.value = poundValue * 0.453592;
  h1.textContent = 'Pound to Kg';
}

kg.addEventListener('input', kgtoPound);
pound.addEventListener('input', poundtokG);
