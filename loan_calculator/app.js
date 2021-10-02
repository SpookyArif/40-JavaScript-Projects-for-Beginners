'use strict';

const amountInput = document.getElementById('amount');
const interestInput = document.getElementById('rate');
const monthInput = document.getElementById('month');
const h3 = document.querySelector('h3');

let perMonth = 0;

function calculate() {
  if (!amountInput.value || !interestInput.value || !monthInput.value) return;

  const interest = Number(amountInput.value) / Number(interestInput.value);
  const total = interest + Number(amountInput.value);
  perMonth = total / Number(monthInput.value);
}

function dislayRes() {
  calculate();

  h3.textContent = `Monthly Payment = ${perMonth} $`;
}

[amountInput, interestInput, monthInput].forEach((input) =>
  input.addEventListener('input', dislayRes)
);
