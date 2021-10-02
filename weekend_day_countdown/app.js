'use strict';

const strong = document.querySelector('strong');
const p = document.querySelector('p');
const span = document.querySelector('span');

const day = new Date();
const today = day.getDay();

const week = [
  'Sunday', //0
  'Monday', //1
  'Tuesday', //2
  'Wednesday', //3
  'Thursday', //4
  'Friday', //5
  'Saturday', //6
];
strong.textContent = week[today];

if (5 - today === 0) {
  span.textContent = 'Today is HollyDay';
} else if (today > 5) {
  p.textContent = today;
} else {
  p.textContent = 5 - today;
}
