'use strict';
const container = document.querySelector('.container');
const card = 10;
//1) fetch data from API =fetchData()
async function detData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  creatDisplay(data);
}

//2) displya data to UI =display()
function creatDisplay(data) {
  const div = document.createElement('div');
  div.classList.add('pokemon');
  div.innerHTML = `
		<img src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" alt="">
			<div class="info">
				<div class="id">id: #${data.id.toString().padStart(3, '0')}</div>
				<div class="name">Name: ${data.name}</div>
				<div class="power">Power: ${data.types[0].type.name}</div>
			</div>
	`;
  container.appendChild(div);
}

//3) loop
function int() {
  for (let i = 1; i <= card; i++) {
    detData(i);
  }
}
int();
