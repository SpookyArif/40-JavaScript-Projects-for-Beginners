'use strict';

const remainedEl = document.getElementById('remained');
const litersEl = document.getElementById('liters');
const percentageEl = document.getElementById('percentage');
const cupEl = document.querySelectorAll('.cup-small');

function fullCup(ind) {
  if (cupEl[ind].classList.contains('full')) ind--;

  cupEl.forEach((el, ind2) => {
    if (ind2 <= ind) {
      el.classList.add('full');
    } else {
      el.classList.remove('full');
    }
  });
  glassFun(ind);
}

function glassFun(ind) {
  ind += 1;
  const value = 12.5 * ind;
  percentageEl.style.height = `${value}%`;
  percentageEl.textContent = `${value}%`;
  if (value === 100) {
    remainedEl.style.height = `0%`;
  }
  litersEl.textContent = `${(2000 - 250 * ind) / 100}L`;
}

cupEl.forEach((val, ind) => {
  val.addEventListener('click', () => fullCup(ind));
});
