'use strict';
const container = document.querySelector('.container');
const btn = document.querySelector('button');
const url = 'https://randomuser.me/api/?results=5';

async function fetchData(link) {
  const res = await fetch(link);
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

btn.addEventListener('click', () => fetchData(url));
