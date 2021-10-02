'use strict';

const img = document.querySelector('img');
const p = document.querySelector('p');
const btn = document.querySelector('button');
const content = document.querySelector('.content');
const hide = document.querySelector('.hide');
const loading = document.querySelector('.loading');

const url = 'https://dog.ceo/api/breeds/image/random';

async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();
  displayUi(data.message);
}

function displayUi(data) {
  content.innerHTML = '';
  const src = data;
  const href = data.split('/');
  const name = href[href.length - 2];

  loading.classList.add('active');
  hide.innerHTML = `<img src="${src}" alt="" class="img">`;

  hide.querySelector('img').addEventListener('load', () => {
    loading.classList.remove('active');
    content.innerHTML += `
			<img src="${src}" alt="" class="img">
			<p class="name">${name}</p>
	`;
  });
}

btn.addEventListener('click', fetchData);
