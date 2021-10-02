'use strict';

const inputEl = document.querySelector('input');
const todoContainerEl = document.querySelector('.todo-container');

// let todoArr = localStorage.getItem('todo')
//   ? JSON.parse(localStorage.getItem('todo'))
//   : [];

let todoArr = [];

function validData(e) {
  if (e.key === 'Enter' && inputEl.value !== '') {
    storeData();
    showData();
  }
}

function storeData() {
  const random = new Date().getTime();
  todoArr.push({ id: random, todo: inputEl.value });

  inputEl.value = '';

  //data store to LS
  // localStorage.setItem('todo', JSON.stringify(todoArr));
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

//init call showData();
showData();

//it should be delete id from todoArr
function delTodo(event) {
  const id = +event.target.id;
  console.log(todoArr);

  todoArr = todoArr.filter((el) => {
    if (id !== el.id) return el;
  });

  showData();

  //update LS
  // localStorage.setItem('todo', JSON.stringify(todoArr));
}

//Event=================
inputEl.addEventListener('keyup', validData);
