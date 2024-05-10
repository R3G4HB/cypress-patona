class InventoryPage {
  elements = {
    filterSelect: () => cy.get(`[data-test="product-sort-container"]`),
    addToCardBtns: () => cy.get(`[id*="add-to-cart"]`),
    cart: () => cy.get('[data-test="shopping-cart-link"]')
  };

  selectDropdown(value) {
    this.elements.filterSelect().select(value)
  }

  addToCardFirst() {
    this.elements.addToCardBtns().first().click()
  }

  addToCardLast() {
    this.elements.addToCardBtns().last().click()
  }

  goToCart() {
    this.elements.cart().click()
  }

}

export const inventoryPage = new InventoryPage();
