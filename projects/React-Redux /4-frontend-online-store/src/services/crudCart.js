export function addToCart(title, price, id, availableQuantity) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    if (cartItems[itemIndex].quantity < availableQuantity) {
      cartItems[itemIndex].quantity += 1;
      localStorage.setItem(
        'cartItems',
        JSON.stringify(cartItems),
      );
    }
  } else {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([...cartItems, { title, id, price, quantity: 1, availableQuantity }]),
    );
  }
}

export function subToCart(id) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1 && cartItems[itemIndex].quantity > 1) {
    cartItems[itemIndex].quantity -= 1;
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems),
    );
  }
}

export function updateCart(title, price, id, quantity, availableQuantity) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems[itemIndex] = { quantity, title, price, id, availableQuantity };
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems),
    );
  } else {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([...cartItems, { title, id, price, quantity, availableQuantity }]),
    );
  }
}

export function deleteCartItem(id) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems),
    );
  }
}
