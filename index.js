var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 for (var i=0; i<cart.length; i++) {
  cart[i] = {
    itemName: item,
    itemPrice: Math.floor((Math.random() * 100) + 1);
  }
  return `${cart[0].itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
		console.log(`Your shopping cart is empty.`)
	}
	else {
  for each (var product in cart){
    console.log(`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
}
}
function total() {
  for each (var price in cart){
    
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
