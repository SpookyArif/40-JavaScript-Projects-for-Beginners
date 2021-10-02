'use strict';

const containerWeather = document.querySelector('.weather-container');
const input = document.querySelector('input');

async function fetchData(e) {
  if (e.key !== 'Enter') return;

  const value = input.value;

  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=605b25df5de9dec14c9756b06ffbef1b&query=${value}`
  );
  const data = await res.json();
  if (data.success === false) return;

  displayUi(data);
  input.value = '';
}

function displayUi(datas) {
  containerWeather.innerHTML = '';
  const name = datas.location.name;
  const temperature = datas.current.temperature;
  const icons = datas.current.weather_icons[0];

  containerWeather.innerHTML = `
<div class="weather-icon">
<img src="${icons}" alt="">
</div>
<div class="temperature-value">
<p>${temperature} °<span>C</span></p>
</div>

<div class="location">
<p>-${name}</p>
</div>
	`;
}

input.addEventListener('keypress', fetchData);
