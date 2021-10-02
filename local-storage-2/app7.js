'use strict';

const inputEl = document.querySelector('input');
const todoContainerEl = document.querySelector('.todo-container');
let todoArr = [];

function validData(e) {
  if (e.key === 'Enter' && inputEl.value !== '') {
    storeData();
    showData();
    console.log(123);
  }
}
function storeData() {
  const random = new Date().getTime();
  todoArr.push({ id: random, todo: inputEl.value });
  inputEl.value = '';
}
function showData() {
  todoContainerEl.innerHTML = '';
  todoArr.forEach((el) => {
    const div = document.createElement('div');
    div.classList.add('content');
    div.innerHTML = `
		<p class="close" onclick="delTodo(event)" id="${el.id}">X</p>
		<p class="work">${el.todo}</p>
		`;
    todoContainerEl.appendChild(div);
  });
}
showData();

function delTodo(event) {
  const id = +event.target.id;
  todoArr = todoArr.filter((el) => id !== el.id);
  showData();
}

inputEl.addEventListener('keyup', validData);
