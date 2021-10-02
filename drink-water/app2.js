'use strict';

const cupsEl = document.querySelectorAll('.cup-small');
const percentageEl = document.getElementById('percentage');
const remainedEl = document.getElementById('remained');
const litersEl = document.getElementById('liters');

function fillCups(index) {
  console.log(index);
  if (cupsEl[index].classList.contains('full')) index--;
  cupsEl.forEach((val, ind) => {
    if (ind <= index) {
      val.classList.add('full');
    } else {
      val.classList.remove('full');
    }
  });
  calcValue(index);
}

function calcValue(index) {
  index = index + 1;
  const value = 12.5 * index;
  if (value === 100) {
    remainedEl.style.height = 0;
  }
  percentageEl.textContent = `${value}%`;
  percentageEl.style.height = `${value}%`;
  litersEl.textContent = (2000 - 250 * index) / 1000 + 'L';
}

cupsEl.forEach((element, index) =>
  element.addEventListener('click', () => fillCups(index))
);
