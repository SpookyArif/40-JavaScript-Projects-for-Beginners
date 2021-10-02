'use strict';

const imgs = document.querySelectorAll('img');
const overlay = document.querySelector('.overlay');
const p = document.querySelector('.name');

function imgValue(e) {
  const target = e.target;
  const alt = target.getAttribute('alt');

  displayOverlay(alt);
  speak(alt);
}

function speak(speech) {
  const synth = window.speechSynthesis;
  const voice = new SpeechSynthesisUtterance(speech);

  synth.speak(voice);
}

function displayOverlay(alt) {
  overlay.style.display = 'flex';
  p.textContent = alt;
}

function overlayClose(e) {
  const target = e.target;

  if (!target.classList.contains('name')) {
    overlay.style.display = 'none';
  }
}

imgs.forEach((img) => {
  img.addEventListener('click', imgValue);
});

overlay.addEventListener('click', overlayClose);
