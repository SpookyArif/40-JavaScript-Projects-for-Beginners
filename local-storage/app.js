'use strict';

const container = document.querySelector('.container');
const person = [
  {
    name: 'alex',
    age: 35,
    married: true,
    img: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Jony',
    age: 15,
    married: false,
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Tony',
    age: 55,
    married: true,
    img: 'https://images.pexels.com/photos/2294478/pexels-photo-2294478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Steven',
    age: 15,
    married: false,
    img: 'https://images.pexels.com/photos/2659177/pexels-photo-2659177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Monika',
    age: 45,
    married: true,
    img: 'https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

localStorage.setItem('person', JSON.stringify(person));

function initPerson() {
  const data = JSON.parse(localStorage.getItem('person'));
  data.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('box');

    div.innerHTML = `
		<img
				src="${item.img}"
				alt="alex" />
			<p>Name: ${item.name}</p>
			<p>Age: ${item.age}</p>
			<p>Married: ${item.married ? 'Yes' : 'No'}</p>
		`;
    container.appendChild(div);
  });
}

initPerson();
