const btns = document.querySelector('.btns');
const button = document.querySelector('button');
const html = document.querySelector('html');
const h1 = document.querySelector('h1');

function btnToggle() {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    h1.textContent = 'Night Mode';
    button.textContent = 'Day Here...';
  } else {
    h1.textContent = 'Day Mode';
    button.textContent = 'Night Here...';
  }
}

[btns, button].forEach((el) => {
  el.addEventListener('click', btnToggle);
});
