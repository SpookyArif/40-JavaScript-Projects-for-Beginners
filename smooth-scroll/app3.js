'use strict';
const nav = document.querySelectorAll('nav');
etA;
function getNav(e) {
  e.preventDefault();
  const target = e.target;
  const href = targt.gttribute('href').replace('#', '');

  document.querySelector(`#${href}`).scrollIntoView({ behavior: 'smooth' });
}
e;
//jsbuilt in func  iok
nav.forEach((element) => element.addEventListener('click', getNav));
