'use strict';
const input = document.querySelector('input');
const h1i = document.querySelector('h1 i');
const form = document.querySelector('form');
const mainCountry = document.querySelector('.main-country');
const neighbour = document.querySelector('.neighbour');

function formSubmit(e) {
  e.preventDefault();
  const str = input.value.trim();
  const expression = /^[a-zA-Z]+$/g;
  if (expression.test(str)) {
    input.value = '';
    input.style.border = '2px solid green';
    fetchData(str);
  } else {
    wrongInput();
  }
}
async function fetchData(country) {
  const url = `https://restcountries.com/v3/name/${country}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data[0] === undefined) return wrongInput();
  displayCountry(data[0]);
}

function displayCountry(datas) {
  const flags = datas.flags[1];
  const country = datas.name.common;
  const capital = datas.capital[0];
  const area = datas.area;
  const currencies = Object.values(datas.currencies)[0];
  const region = datas.region;
  const languages = Object.values(datas.languages)[0];
  const borders = datas.borders;
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
</div>`;

  neighbour.insertAdjacentHTML('beforeend', html2);
}

function inputText() {
  const str = input.value.trim();
  h1i.textContent = str ? str : 'Nothing';
}
function wrongInput() {
  input.style.border = '2px solid red';
  mainCountry.innerHTML = '';
  neighbour.innerHTML = '';
}

input.addEventListener('input', inputText);
form.addEventListener('submit', formSubmit);
