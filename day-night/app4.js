const btns = document.querySelector('.btns');
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const html = document.querySelector('html');

function btnToggle() {
  html.classList.toggle('dark');
  h1.textContent = h1.textContent === 'Day Mode' ? 'Night Mode' : 'Day Mode';
  btn.textContent =
    btn.textContent === 'Night Here...' ? 'Day Here...' : 'Night Here...';
}

[btns, btn].forEach((el) => {
  el.addEventListener('click', btnToggle);
});
