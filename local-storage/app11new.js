'use strict';

const btn = document.querySelector('button');
const input = document.querySelector('input');
const container = document.querySelector('.container');

async function fetchData() {
  const inputTxt = input.value;
  const url = `https://randomuser.me/api/?results=${inputTxt}`;
  const res = await fetch(url);
  const data = await res.json();
  displayUi(data.results);
}

function displayUi(allData) {
  container.innerHTML = '';
  allData.forEach((data) => {
    const married = data.dob.age >= 45 ? true : false;
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = `
			<img
					src="${data.picture.large}"
					alt="${data.name}" />
				<p>Name: ${data.name.first} ${data.name.last}</p>
				<p>Age: ${data.dob.age}</p>
				<p>Married: ${married ? 'Yes' : 'No'}</p>
		`;
    container.appendChild(div);
  });
}

btn.addEventListener('click', fetchData);
