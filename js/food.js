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
      ulEl.removeChild(ulEl.lastElementChild);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      preQuantity += Food.all[i].quantity;
      liEl.textContent = `Your Order : ${preQuantity} of ${Food.all[i].item}`;
    }

    /*-------------------------prevent order of  nothing ---------------*/
    if (preItem===''){
      ulEl.removeChild(ulEl.lastElementChild);
    }
  }
  foodForm.reset();
}
/*----------------------country button--------------------------------- */
function MyFunction(recipe) {
  this.recipe = recipe;
  this.x = document.getElementById(this.recipe);
}
MyFunction.prototype.render = function () {
  if (this.x.style.display === 'block') {
    this.x.style.display = 'none';
  } else {
    this.x.style.display = 'block';
  }
};
let resipe1 = new MyFunction('resipePara1');
let resipe2 = new MyFunction('resipePara2');
let resipe3 = new MyFunction('resipePara3');
let resipe4 = new MyFunction('resipePara4');
let resipe5 = new MyFunction('resipePara5');
let resipe6 = new MyFunction('resipePara6');
retrieve();
renderOrder();
