'use strict';
const foodForm = document.getElementById('food-Form');
const orders = document.getElementById('orders');

function Food(item, quantity) {
  this.item = item;
  this.quantity = quantity;
  Food.all.push(this);
}

Food.all = [];

function handelTakeOrder(event) {
  event.preventDefault();
  const quantity = parseFloat(event.target.quantity.value);
  const item = event.target.item.value;
  new Food(item, quantity);
  renderOrder();


}

foodForm.addEventListener('submit', handelTakeOrder);

function renderOrder() {
  const ulEl = document.getElementById('orders');
  ulEl.innerHTML = ''; //to remove last order
  let preQuantity = 0;
  let preItem = '';
  for (let i = 0; i < Food.all.length; i++) {
    if (preItem !== Food.all[i].item) {
      preQuantity = 0;
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      preQuantity += Food.all[i].quantity;
      liEl.textContent = `Your Order : ${Food.all[i].quantity} of ${Food.all[i].item}`;
      preItem = Food.all[i].item;
    }else{
      ulEl.removeChild(ulEl.lastElementChild);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      preQuantity += Food.all[i].quantity;
      liEl.textContent = `Your Order : ${preQuantity} of ${Food.all[i].item}`;
    }

  }
}

renderOrder();



// const imgSection = document.getElementById('img-section');
// // const img=document.createElement('img-section');
// var img = document.createElement('img');
// console.log(img);
// img.src = '../imgs/food3.jpg';
// console.log(img.src);
// var src = document.getElementById('src');
// src.appendChild(imgSection);
// // imgSection.appendChild(img);
// imgSection.setAttribute('src','./imgs/food1.jpg');
// // const img=document.createElement('img');
// img.setAttribute('../imgs/food2.jpg');
// imgSection.appendChild(img);
// // const img =document.createElement('img');
// img.setAttribute('../imgs/food3.jpg');
// imgSection.appendChild(img);
// // const img=document.createElement('img');
// img.setAttribute('../imgs/food7.jpg');
// imgSection.appendChild(img);
// // const img=document.createElement('img');
// img.setAttribute('../imgs/food5.jpg');
// imgSection.appendChild(img);
// // const img=document.createElement('img');
// img.setAttribute('../imgs/food6.jpg');
// imgSection.appendChild(img);
