var cart = new Array()

function setCart(newCart) {
  cart = newCart;
}

function total() {
  var t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }else{
    var string = "In your cart, you have "
    for(var i = 0; i < cart.length; i++){
      var key = Object.keys(cart[i])[0]
      var punctuation = i === cart.length-1 ? "." : ", "
      string += `${key} at $${cart[i][key]}${punctuation}`
    }
    console.log(string)
  }
}

function removeFromCart(itemToDelete){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemToDelete)){
      return cart.splice(i,1)
    }
  } 
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
}
  




