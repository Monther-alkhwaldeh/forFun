'use strict';
/*--------------start cooking code-------------------------------- */
const foodForm = document.getElementById('food-Form');
const orders = document.getElementById('orders');


/*----------------constructer function---------------------------- */
function Food(item, quantity) {
  this.item = item;
  this.quantity = quantity;
  Food.all.push(this);
  localStorage.setItem('orders', JSON.stringify(Food.all));
}

/**----------------retrieve the obj into JS form----------------   */
function retrieve() {
  if (localStorage.length > 0) {
    Food.all = JSON.parse(localStorage.getItem('orders'));
    renderOrder();
  }
}
Food.all = [];

/**----------------eventFunction-------------------------------- */
function handelTakeOrder(event) {
  event.preventDefault();
  const quantity = parseFloat(event.target.quantity.value);
  const item = event.target.item.value;
  new Food(item, quantity);
  renderOrder();

}
foodForm.addEventListener('submit', handelTakeOrder);

/**------------------renderFunction----------------------------- */
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
    } else {
      ulEl.removeChild(ulEl.lastElementChild); //add quantity to the same order
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      preQuantity += Food.all[i].quantity;
      liEl.textContent = `Your Order : ${preQuantity} of ${Food.all[i].item}`;
    }

    /*-------------------------prevent order of  nothing ---------------*/
    if (preItem === '') {
      ulEl.removeChild(ulEl.lastElementChild);
    }
  }
  foodForm.reset();
}


function ViewCountry(country) {
  this.country = country;
  this.x = document.getElementById(this.country);
}
ViewCountry.prototype.render = function () {
  if (this.x.style.display === 'block') {
    this.x.style.display = 'none';
  } else {
    this.x.style.display = 'block';
  }
};
let CoBottun1 = new ViewCountry('resipePara1');
let CoBottun2 = new ViewCountry('resipePara2');
let CoBottun3 = new ViewCountry('resipePara3');
let CoBottun4 = new ViewCountry('resipePara4');
let CoBottun5 = new ViewCountry('resipePara5');
let CoBottun6 = new ViewCountry('resipePara6');
retrieve();
renderOrder();

