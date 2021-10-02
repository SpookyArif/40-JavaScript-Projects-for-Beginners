'use strict';

const btn = document.querySelector('button');

function btnClick() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lan = position.coords.longitude;
      const url = `https://www.google.com/maps/@${lat},${lan},20z`;
      location.replace(url);
    },
    (error) => {
      console.error('You does not show your location');
    }
  );
}

btn.addEventListener('click', btnClick);
