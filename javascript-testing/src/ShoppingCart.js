class ShoppingCart {
  items = [];

  // Getters
  get items() {
    return this.items;
  }

  get total() {
    return this.items
      .reduce((total, currentItem) => {
        total += currentItem.price;
        return total;
      }, 0)
      .toFixed(2);
  }

  // Methods
  addItem(id, title, price) {
    const newItem = { id, title, price };
    this.items.push(newItem);
  }
}

module.exports = ShoppingCart;
