const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const colors = 'abcdef0123456789';

function randomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++)
    color += colors.charAt(Math.floor(Math.random() * colors.length - 1));
  return color;
}

function cngColor() {
  document.body.style.backgroundColor = randomColor();
  h1.textContent = randomColor();
}

button.addEventListener('click', cngColor);
