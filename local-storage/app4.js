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

function displayUi() {
  //1. get data from localStorage()
  const allData = JSON.parse(localStorage.getItem('person'));

  //2. display data to UI(html page)
  allData.forEach((data) => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = `
	<img src="${data.img}" alt="${data.name}">
	<p>Name: ${data.name}</p>
	<p>Age: ${data.age}</p>
	<p>Married: ${data.married ? 'Yes' : 'No'}</p>
	`;
    container.appendChild(div);
  });
}

displayUi();
