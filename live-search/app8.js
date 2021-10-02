'use strict';

const filter = document.getElementById('filter');
const ul = document.getElementById('result');
const url = 'https://randomuser.me/api/?results=50';

// get data from url
async function fetchData(link) {
  const res = await fetch(link);
  const data = await res.json();
  displayData(data.results);
}
fetchData(url);
// get data from url
//------//
// display data from url
function displayData(alldata) {
  ul.innerHTML = ''; //??
  alldata.forEach((a) => {
    const li = document.createElement('li');
    li.innerHTML = `
		<img src="${a.picture.large}"alt="women" />
		<div class="user-info">
   <h4>
    ${a.name.first} ${a.name.last}
    </h4>
   <p>
   ${a.location.city} ${a.location.country}
   </p>
		</div>`;
    ul.appendChild(li); //??
  });
}
// display data from url

//-----//

//filter input
function search() {
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

filter.addEventListener('input', search);
//filter input
