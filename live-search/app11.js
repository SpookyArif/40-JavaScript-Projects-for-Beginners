'use strict';

const url = 'https://randomuser.me/api/?results=50';
const ul = document.getElementById('result');
const filter = document.getElementById('filter');

async function fetchData(link) {
  const res = await fetch(link);
  const data = await res.json();
  displayData(data.results);
}
fetchData(url);
function displayData(allData) {
  ul.innerHTML = '';
  allData.forEach((a) => {
    const li = document.createElement('li');
    li.innerHTML = `
<img src="${a.picture.large}"/>

<div class="user-info">
<h4>
${a.name.first} ${a.name.last}
</h4>
<p>
${a.location.city} ${a.location.country}
</p>
</div>`;
    ul.appendChild(li);
  });
}

function inputName() {
  const allLi = document.querySelectorAll('li');
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

filter.addEventListener('input', inputName);
