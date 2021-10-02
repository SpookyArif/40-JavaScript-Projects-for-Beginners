const li = document.querySelectorAll('li');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
li.forEach((a, b) => {
  a.style.marginLeft = `${b * 10}px`;
  a.style.transition = `${b * 0.5}s`;
});

function toggle() {
  document.body.classList.toggle('active');
}

[bar, close].forEach((el) => {
  el.addEventListener('click', toggle);
});
