const container = document.querySelector('.container');
const url = 'https://randomuser.me/api/?results=5';

async function fetechData(link) {
  const res = await fetch(link);
  const data = await res.json();
  displayUi(data.results);
}

function displayUi(allData) {
  allData.forEach((data) => {
    const married = data.dob.age >= 45 ? true : false;
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = `
		<img
					src="${data.picture.large}"
					alt="${data.name}">
				<p>Name: ${data.name.first}  ${data.name.last}</p>
				<p>Age: ${data.dob.age}</p>
				<p>Married: ${married ? 'Yes' : 'No'}</p>
		`;
    container.appendChild(div);
  });
}

fetechData(url);
