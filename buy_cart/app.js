'use strict';
const showCart = document.querySelector('.show-cart');
const cartInfo = document.querySelector('.cart-info');
const strong = cartInfo.querySelector('strong');
const boxes = document.querySelectorAll('.box');
const productInfo = document.querySelector('.product-info');

let datas = [];

function showCartActive() {
  const items = +strong.textContent;

  if (items < 1) return;

  showCart.classList.toggle('active');
}

function docFun(e) {
  const cart = e.target.closest('.cart');

  if (cart) return;

  const target = e.target.closest('.show-cart');
  console.log(target);
  if (!target) {
    showCart.classList.remove('active');
  }
}

function boxesFun(e) {
  const target = e.target.closest('.box');

  const id = new Date().getTime();
  const img = target.querySelector('img').getAttribute('src');
  const title = target.querySelector('.title').textContent;
  const quantity = target.querySelector('.quantity').textContent;
  const price = target.querySelector('.price').textContent;

  datas.push({
    id: id,
    img: img,
    title: title,
    quantity: quantity,
    price: price,
  });

  target.setAttribute('data-id', id);
  overlayActive(target);
}

function overlayActive(target) {
  target.style.pointerEvents = 'none';
  target.querySelector('.overlay').classList.add('active');
  displayUI();
  cartTotal();
}

function overlayDisActive(id) {
  const boxes = document.querySelector('.boxes').querySelectorAll('.box');

  boxes.forEach((box) => {
    const boxId = +box.getAttribute('data-id');
    if (boxId === id) {
      box.querySelector('.overlay').classList.remove('active');
    }
    box.style.pointerEvents = 'auto';
  });

  //hide show cart
  if (datas.length === 0) {
    showCart.classList.remove('active');
  }

  displayUI();
  cartTotal();
}

function cartTotal() {
  strong.textContent = datas.length;
}

function displayUI() {
  productInfo.innerHTML = '';
  datas.forEach((data) => {
    const html = `
			<div class="product" data-id="${data.id}">
				<img src="${data.img}">
				<span class="title">${data.title}</span>
				<span class="quantity">${data.quantity}</span>
				<span>${data.price}</span>
				<span class="del">X</span>
			</div> 
	`;

    productInfo.insertAdjacentHTML('beforeend', html);

    const prodcuts = productInfo.querySelectorAll('.product');

    prodcuts.forEach((pro) => pro.addEventListener('click', deleted));
  });
}

function deleted(e) {
  const target = e.target;
  if (target.classList.contains('del')) {
    const id = +target.closest('.product').getAttribute('data-id');

    const index = datas.findIndex((el) => el.id === id);
    datas.splice(index, 1);

    overlayDisActive(id);
  }
}

cartInfo.addEventListener('click', showCartActive);
boxes.forEach((el) => {
  el.addEventListener('click', boxesFun);
});

document.addEventListener('click', docFun);
