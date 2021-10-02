'use strict';

const ul = document.getElementById('result');
const filter = document.querySelector('#filter');
const url = 'https://randomuser.me/api/?results=50';

async function fetchData(link) {
  const res = await fetch(link);
  const data = await res.json();

  displayUI(data.results);
}

fetchData(url);

function displayUI(datas) {
  ul.innerHTML = '';

  datas.forEach((data) => {
    const li = document.createElement('li');

    li.innerHTML = `
				<img
					src="${data.picture.large}"
					alt="women" />
				<div class="user-info">
					<h4>${data.name.first} ${data.name.last}</h4>
					<p>${data.location.city} ${data.location.country}</p>
				</div>
		`;

    ul.appendChild(li);
  });
}

function search() {
  const allLi = ul.querySelectorAll('li');

  allLi.forEach((li) => {
    if (
      li.textContent
        .trim()
        .toLowerCase()
        .includes(filter.value.trim().toLowerCase())
    ) {
      li.classList.remove('hide');
    } else {
      li.classList.add('hide');
    }
  });
}

filter.addEventListener('input', search);
