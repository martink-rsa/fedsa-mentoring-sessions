export const shoppingCart = (function ShoppingCart() {
  const items = []; //

  function getTotal() {
    if (items.length === 0) {
      return 0;
    }
    return items.reduce((total, currentItem) => {
      total += currentItem.price;
      return total;
    }, 0);
  }

  function addItem(item) {
    items.push(item);
  }

  return {
    getTotal,
    addItem,
  };
})();

//

console.log(shoppingCart.getTotal());
shoppingCart.addItem({ title: 'Milk', price: 99.99, quantity: 1 });
console.log(shoppingCart.getTotal());
