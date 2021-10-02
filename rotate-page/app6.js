const close = document.querySelector('.close');
const bar = document.querySelector('.bar');
const li = document.querySelectorAll('li');

li.forEach((ind, val) => {
  ind.style.marginLeft = `${val * 15}px`;
  ind.style.transition = `${val * 0.5}s`;
});

function toggleAdd() {
  document.body.classList.toggle('active');
}

[close, bar].forEach((el) => {
  el.addEventListener('click', toggleAdd);
});
