'use strict';
const input = document.querySelector('input');
const container = document.querySelector('.container');
const button = document.querySelector('button');

async function fetchData() {
  const inputTxt = input.value;
  const url = `https://randomuser.me/api/?results=${inputTxt}`;

  const res = await fetch(url);
  const data = await res.json();
  displayUi(data.results);
  console.log(data);

  function displayUi(allData) {
    container.innerHTML = '';
    allData.forEach((a) => {
      const div = document.createElement('div');
      div.classList.add('box');
      div.innerHTML = `
			<img
					src="${a.picture.large}"
					alt="${a.picture.name}" />
				<p>Name: ${a.name.first} ${a.name.last}</p>
				<p>Age:  ${a.dob.age}</p>
				<p>Married: ${a.gender}</p>
			`;
      container.appendChild(div);
    });
  }
}

button.addEventListener('click', fetchData);
