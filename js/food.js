const foodForm = document.getElementById("food-Form")
const orders = document.getElementById("orders")

function Food(item, quantity) {
    this.item = item;
    this.quantity = quantity;

    Food.all.push(this)
}

Food.all = [];

console.log(Food.all)

