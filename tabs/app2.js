'use strict';
//ok start..........

const tabButton = document.querySelector('.tab-button');
const btns = document.querySelectorAll('.btn');
const tabContent = document.querySelectorAll('.tab-content');

//fn
function tab(e) {
  const btn = e.target.closest('.btn');
  const data = btn.getAttribute('tab-data');

  btns.forEach((btn) => btn.classList.remove('btn--active'));

  btn.classList.add('btn--active');

  tabContent.forEach((tab) => tab.classList.remove('tab-content--active'));
  document
    .querySelector(`.tab-content--${data}`)
    .classList.add('tab-content--active');
}

//add click event on all
tabButton.addEventListener('click', tab);
