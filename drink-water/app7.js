const cupEl = document.querySelectorAll('.cup-small');
const remainedEl = document.getElementById('remained');
const percentageEl = document.getElementById('percentage');
const litersEl = document.getElementById('liters');

function fullCup(ind) {
  if (cupEl[ind].classList.contains('full')) ind--;

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
