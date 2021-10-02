'use strict';
const btn = document.querySelector('button');

function btnClick() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lan = position.coords.longitude;
      const url = `https://www.google.com/maps/@${lat},${lan},15z`;
      location.replace(url);
    },
    (error) => {
      console.error('You does not want to show your location');
    }
  );
}

btn.addEventListener('click', btnClick);
