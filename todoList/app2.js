'use strict';
const input = document.querySelector('input');
const form = document.querySelector('form');
const container = document.querySelector('.container');

function formProsess(e) {
  e.preventDefault();
  if (input.value === '') return;
  todoList();
  input.value = '';
}
function todoList() {
  const letter = input.value;
  const h1 = document.createElement('h1');
  h1.textContent = letter;
  h1.style.backgroundColor = 'red';
  h1.style.userSelect = 'none';
  h1.style.cursor = 'pointer';
  h1.style.padding = '10px 10px';
  h1.addEventListener('dblclick', delH1);
  container.appendChild(h1);
}
function delH1() {
  this.remove();
}

form.addEventListener('submit', formProsess);
