'use strict';

const cupEl = document.querySelectorAll('.cup-small');
const remainedEl = document.getElementById('remained');
const litersEl = document.getElementById('liters');
const percentage = document.getElementById('percentage');

function fullCup(ind) {
  //1: ck is ind existis with full class then decrease ind by -- koro
  if (cupEl[ind].classList.contains('full')) ind--; //

  cupEl.forEach((a, b) => {
    if (b <= ind) {
      a.classList.add('full');
    } else {
      a.classList.remove('full');
    }
  });
  calEl(ind);
}

function calEl(ind) {
  ind += 1;
  const value = 12.5 * ind;
  percentage.style.height = `${value}%`;
  percentage.textContent = `${value}%`;

  //if value 100% then remaind height will be 0%
  if (value === 100) {
    remainedEl.style.height = `0%`;
  }

  litersEl.textContent = `${(2000 - 250 * ind) / 1000}L`;
}

cupEl.forEach((val, ind) => {
  val.addEventListener('click', () => fullCup(ind));
});
