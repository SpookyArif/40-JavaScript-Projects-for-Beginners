'use strict';

const input = document.querySelector('input');
const h1i = document.querySelector('h1 i');
const form = document.querySelector('form');
const mainCountry = document.querySelector('.main-country');
const neighbour = document.querySelector('.neighbour');

function getUserValue(e) {
  e.preventDefault();
  console.log(e);
  const str = input.value.trim();
  const pattern = /^[a-zA-Z]+$/g;

  if (pattern.test(str)) {
    input.value = '';
    input.style.border = '1px solid transparent';
    fetchData(str);
  } else {
    wrongCtn();
  }
}

async function fetchData(ctn) {
  const url = `https://restcountries.com/v3/name/${ctn}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data[0]);
  if (data[0] === undefined) return wrongCtn();
  displayUI(data[0]);
}

function displayUI(data) {
  const flags = data.flags[1];
  const country = data.name.common;
  const capital = data.capital[0];
  const area = data.area;
  const currencies = Object.values(data.currencies)[0].name;
  const region = data.region;
  const languages = Object.values(data.languages)[0];
  const borders = data.borders;
  const html = `
<img
	src="${flags}"
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

	<p class="border"><span>Border: </span><span>
			${borders?.length > 0 ? borders : 'NO'}</span></p>
	<p><span>Languages: </span><span>${languages}</span></p>
</div>
	`;

  console.log(mainCountry);
  mainCountry.innerHTML = html;
  if (borders?.length > 0) {
    borderCountry(borders);
  } else {
    neighbour.innerHTML = '';
  }
}

function borderCountry(borders) {
  neighbour.innerHTML = '';

  borders.forEach((border) => fetchBorder(border));
}

async function fetchBorder(border) {
  const url = `https://restcountries.com/v2/alpha/${border}`;
  const res = await fetch(url);
  const data = await res.json();
  displayBorderUi(data);
}
function displayBorderUi(data) {
  const flags = data.flags[1];
  const country = data.name;
  const capital = data.capital;
  const area = data.area;
  const html2 = `
	<div class="country">
		<img
			src="${flags}"
			alt="">

		<div>
			<p><span>Country</span><span>${country}</span></p>
			<p><span>Capital</span><span>${capital}</span></p>
			<p><span>Area</span><span>${area}</span></p>
		</div>
	</div>
	`;
  neighbour.insertAdjacentHTML('beforeend', html2);
}

function wrongCtn() {
  input.style.border = '1px solid red';
  mainCountry.innerHTML = '';
  neighbour.innerHTML = '';
}
function showText() {
  const str = input.value.trim();
  h1i.textContent = str ? str : 'Nothing';
}
input.addEventListener('input', showText);
form.addEventListener('submit', getUserValue);
