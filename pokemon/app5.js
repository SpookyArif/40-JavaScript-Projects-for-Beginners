'use strict';
const container = document.querySelector('.container');
const card = 10;

// 1 fetch data
async function fetchData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  creatDisplay(data);
}

// 2 display data
function creatDisplay(data) {
  const div = document.createElement('div');
  div.classList.add('pokemon');
  div.innerHTML = `
	
				<div class="info">
				<div class="id">id: #${data.id.toString().padStart(3, '0')}</div>
				<div class="name">Name: ${data.name}</div>
				<div class="power">Power: ${data.types[0].type.name}</div>
			</div>
	`;
  container.appendChild(div);
}

// 3 loop card
function int() {
  for (let i = 0; i <= card; i++) {
    fetchData(i);
  }
}
int();
