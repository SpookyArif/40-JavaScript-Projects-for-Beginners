'use strict';
const images = document.querySelectorAll('img[data-src]');

//create observer
const imgObserver = new IntersectionObserver(lazLoad, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
//add observer to an element
images.forEach((img) => imgObserver.observe(img));
//call back func
function lazLoad(entries, observe) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.getAttribute('data-src');
  entry.target.classList.remove('lazy');
  observe.unobserve(entry.target);
}
