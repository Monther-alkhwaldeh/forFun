const foodForm = document.getElementById('food-Form');
const orders = document.getElementById('orders');

function Food(item, quantity) {
  this.item = item;
  this.quantity = quantity;

  Food.all.push(this);
}

Food.all = [];

function handelTakeOrder(event){
  event.preventDefault();
  console.log(event.target);
  const quantity =  event.target.quantity.value;
  const item =event.target.item.value;

  new Food(item,quantity);
  renderOrder();
}

foodForm.addEventListener('submit', handelTakeOrder);

function renderOrder(){
  const ulEl = document.getElementById('orders');
  for (let i = 0; i < Food.all.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= `Your Order : ${Food.all[i].quantity} of ${Food.all[i].item}`;

  }

}
renderOrder();
