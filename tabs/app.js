'use strict';

const tabButton = document.querySelector('.tab-button');
const btns = document.querySelectorAll('.btn');
const tabContents = document.querySelectorAll('.tab-content');

function tab(e) {
  const btn = e.target.closest('.btn');
  const tab = btn.getAttribute('tab-data');

  //Add active class in button
  btns.forEach((btn) => btn.classList.remove('btn--active'));
  btn.classList.add('btn--active');

  //Add active class in tab

  tabContents.forEach((tab) => tab.classList.remove('tab-content--active'));
  document
    .querySelector(`.tab-content--${tab}`)
    .classList.add('tab-content--active');
}

tabButton.addEventListener('click', tab);
