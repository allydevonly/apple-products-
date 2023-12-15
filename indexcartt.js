const addToCartButtons = document.querySelectorAll('.add-to-cart');
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
const hearts = document.querySelectorAll('.heart');
const totalElement = document.getElementById('total');
const cartList = document.getElementById('cart-list');
let total = 0;

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const price = parseInt(button.getAttribute('data-price'));
    total += price;
    updateTotal();

    const itemName = button.parentNode.querySelector('h2').textContent;
    addToCartList(itemName, price);
  });
});

removeFromCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const price = parseInt(button.getAttribute('data-price'));
    total -= price;
    updateTotal();

    const itemName = button.parentNode.querySelector('h2').textContent;
    removeFromCartList(itemName);
  });
});

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('red-heart');
  });
});

function updateTotal() {
  totalElement.textContent = total;
}

function addToCartList(itemName, price) {
  const listItem = document.createElement('li');
  listItem.textContent = `${itemName} - $${price}`;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    total -= price;
    updateTotal();
    removeFromCartList(itemName);
  });

  listItem.appendChild(removeButton);
  cartList.appendChild(listItem);
}

function removeFromCartList(itemName) {
  const items = cartList.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.includes(itemName)) {
      cartList.removeChild(items[i]);
      break;
    }
  }
}
