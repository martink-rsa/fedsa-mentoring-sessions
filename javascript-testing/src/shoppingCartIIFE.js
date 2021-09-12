export const shoppingCart = (function ShoppingCart() {
  const items = [];

  /** Adds an item to the cart */
  function addItem(item) {
    items.push(item);
  }

  /** Gets the total for all items in the cart */
  function getTotal() {
    if (items.length === 0) {
      return 0;
    }
    return items.reduce((total, currentItem) => {
      total += currentItem.price;
      return total;
    }, 0);
  }

  return {
    getTotal,
    addItem,
  };
})();
