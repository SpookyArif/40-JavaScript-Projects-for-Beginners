'use strict';
const container = document.querySelector('.container');
const cards = 10;

//1) fetch data from API =fetchData()
async function getData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createCards(data);
}

//2) displya data to UI =display()

function createCards(data) {
  const div = document.createElement('div');
  div.classList.add('pokemon');
  const innerEl = `
			<img src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" alt="">
			<div class="info">
				<div class="id">id: #${data.id.toString().padStart(3, '0')}</div>
				<div class="name">Name: ${data.name}</div>
				<div class="power">Power: ${data.types[0].type.name}</div>
	`;
  div.innerHTML = innerEl;
  container.appendChild(div);
}
//3) loop
function int() {
  for (let i = 1; i <= cards; i++) {
    getData(i);
  }
}
int();
