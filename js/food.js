



const foodForm = document.getElementById('food-Form');
const orders = document.getElementById('orders');

let preq1 = 0;
let preq2 = 0;
let preq3 = 0;


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
  ulEl.innerHTML = '';//to remove last order
  let preQuantity=0;
  let preItem='';
  for (let i = 0; i < Food.all.length; i++) {
    if (preItem !== Food.all[i].item ){
      preQuantity=0;
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      preQuantity +=Food.all[i].quantity;
      liEl.textContent = `Your Order : ${Food.all[i].quantity} of ${Food.all[i].item}`;
      preItem = Food.all[i].item;
      ulEl.removeChild(ulEl.lastElementChild);
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


// function renderOrder() {
//   const ulEl = document.getElementById('orders');
//   ulEl.innerHTML = '';
//   for (let i = 0 ; i < Food.all.length ; i++) {
//     if (Food.all[i].item === 'Salmon' ) {
//       console.log(Food.all[i].quantity);

//       preq1+=Food.all[i].quantity;
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `Your Order : ${preq1} of ${Food.all[i].item}`;

//     } else if (Food.all[i].item === 'Cheesecake' ) {

//       preq2 +=Food.all[i].quantity;
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `Your Order : ${preq2} of ${Food.all[i].item}`;
//     } else if (Food.all[i].item === 'Ice-cream' ) {

//       preq3 +=Food.all[i].quantity;
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `Your Order : ${preq3} of ${Food.all[i].item}`;

//     }


//   }
// }
/* renderOrder();
 */
