const close = document.querySelector('.close');
const bar = document.querySelector('.bar');
const li = document.querySelectorAll('li');

li.forEach((val, ind) => {
  val.style.marginLeft = `${ind * 10}px`;
  val.style.transition = `${ind * 0.5}s`;
});

function toggle(a) {
  document.body.classList.toggle('active');
}

[close, bar].forEach((el) => {
  el.addEventListener('click', toggle);
});
