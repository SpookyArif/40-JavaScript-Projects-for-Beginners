'use strict';

const form = document.querySelector('form');
const inputEl = document.querySelector('input');
const h1i = document.querySelector('h1 i');
const mainCountry = document.querySelector('.main-country');
const neighbourCountry = document.querySelector('.neighbour');

function getUserValue(e) {
  e.preventDefault();
  const str = inputEl.value.trim();

  const pattern = /^[a-zA-Z]+$/g;
  if (pattern.test(str)) {
    inputEl.value = '';
    inputEl.style.border = '1px solid transparent';
    fetchData(str);
  } else {
    return wrongCtn();
  }
}

async function fetchData(ctn) {
  const url = `https://restcountries.com/v3/name/${ctn}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.length === undefined || data.status === 404) return wrongCtn();
  displayUI(data[0]);
}

function displayUI(data) {
  const src = data.flags[1];
  const country = data.name.common;
  const capital = data.capital[0];
  const area = data.area;
  const currencies = Object.values(data.currencies)[0].name;
  const region = data.region;
  const language = Object.values(data.languages);
  const borders = data.borders;
  const html = `
						<img
							src="${src}"
							alt="">

						<div>
							<p><span>Country: </span><span>${country}</span></p>
							<p><span>Capital: </span><span>${capital}</span></p>
							<p><span>Area: </span><span>${area}</span></p>
							<p><span>Currency: </span><span>${currencies}</span></p>
							<p><span>Region: </span><span>${region}</span></p>
							<p><span>Total Neighbours: </span><span>${
                borders?.length > 0 ? borders.length : 0
              }</span></p>
							<p><span>Neighbours Are: </span><span>${
                borders?.length > 0 ? borders.join(' , ') : null
              }</span></p>
							<p><span>Languages: </span><span>${language}</span></p>
						</div>
					`;
  mainCountry.innerHTML = html;

  if (borders?.length > 0) {
    borderCountry(borders);
  } else {
    neighbourCountry.innerHTML = '';
  }
}

function borderCountry(borders) {
  neighbourCountry.innerHTML = `<h3>Neighbour Country</h3>`;
  borders.forEach((border) => fetchBorders(border));
}

async function fetchBorders(border) {
  const res = await fetch(`https://restcountries.com/v3/alpha?codes=${border}`);
  const data = await res.json();

  displayBordersUI(data[0]);
}

function displayBordersUI(data) {
  const src = data.flags[1];
  const country = data.name.common;
  const capital = data.capital[0];
  const area = data.area;

  const html = `
					<div class="country">
						<img
							src="${src}"
							alt="">

						<div>
							<p><span>Country: </span><span>${country}</span></p>
							<p><span>Capital: </span><span>${capital}</span></p>
							<p><span>Area: </span><span>${area}</span></p>
						</div>
					</div>
					`;
  neighbourCountry.insertAdjacentHTML('beforeend', html);
}

function wrongCtn() {
  inputEl.style.border = '1px solid red';
  mainCountry.innerHTML = '';
  neighbourCountry.innerHTML = '';
}

function showText() {
  const str = inputEl.value.trim();
  h1i.textContent = str ? str : 'Nothing';
}

//////////////////
form.addEventListener('submit', getUserValue);
inputEl.addEventListener('input', showText);
inputEl.addEventListener('keypress', showText);
