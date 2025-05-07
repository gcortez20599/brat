script.js
let cartCount = 0;

function addToCart(item, price) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(`Added ${item} to cart for $${price}`);
}

function playSample(albumName) {
  alert(`Playing a sample from ${albumName}...`);
}
