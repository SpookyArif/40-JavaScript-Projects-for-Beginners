'use strict';
const link = 'https://api.quotable.io/random?tags=technology,famous-quotes';
const newBtn = document.querySelector('.new');
const h3 = document.querySelector('h3');
const h5 = document.querySelector('h5');
const markBtn = document.querySelector('.mark');
const bookmarks = document.querySelector('.bookmarks');
const overlay = document.querySelector('.overlay');
const ulEl = document.querySelector('ul');
const msgEl = document.querySelector('.msg');

let bookmarkDatas = localStorage.getItem('bookmarks')
  ? JSON.parse(localStorage.getItem('bookmarks'))
  : [];

let content = '';
let author = '';

async function randomQuote() {
  const res = await fetch(link);
  const data = await res.json();

  content = data.content;
  author = data.author;

  unBookmarked();
  displayUI();
}

function displayUI() {
  h3.textContent = `"${content}"`;
  h5.textContent = `--${author}`;
}

function bookmarked() {
  markBtn.textContent = 'Bookmarked';
  markBtn.classList.add('active');
}

function unBookmarked() {
  markBtn.textContent = 'Bookmark';
  markBtn.classList.remove('active');
}

function markQuote() {
  bookmarked();

  bookmarkDatas.push({
    id: new Date().getTime(),
    content: content,
    author: author,
  });

  localStorage.setItem('bookmarks', JSON.stringify(bookmarkDatas));
}

function bookmarksShow() {
  overlay.classList.add('active');

  if (!bookmarkDatas.length) {
    msgEl.classList.add('active');
  } else {
    msgEl.classList.remove('active');
    displayBookmarksUI();
  }
}

function displayBookmarksUI() {
  ulEl.innerHTML = '';

  bookmarkDatas.forEach((bookmark) => {
    const text = `
			<li>
				<span class="del" data-id="${bookmark.id}">🗑️</span>
				<p class="content">"${bookmark.content}"</p>
				<p class="author">-${bookmark.author}</p>
			</li>
		`;

    ulEl.insertAdjacentHTML('beforeend', text);
  });

  ulEl
    .querySelectorAll('.del')
    .forEach((del) => del.addEventListener('click', deleted));
}

function deleted(e) {
  const getId = +e.target.getAttribute('data-id');
  const findId = bookmarkDatas.findIndex((data) => data.id === getId);

  bookmarkDatas.splice(findId, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarkDatas));
  displayBookmarksUI();

  if (!bookmarkDatas.length) {
    overlay.classList.remove('active');
  }
}

function hideOverlay(e) {
  const target = e.target.closest('.bookmarks');
  const ul = e.target.closest('ul');

  const del = document.querySelector('ul').querySelectorAll('.del');

  if (e.target.classList.contains('del')) return;
  if (target) return;
  if (ul) return;

  overlay.classList.remove('active');
}

randomQuote();
newBtn.addEventListener('click', randomQuote);
markBtn.addEventListener('click', markQuote);
bookmarks.addEventListener('click', bookmarksShow);
document.addEventListener('click', hideOverlay);
