class CartPage {
  elements = {
    description: () => cy.get('[data-test="inventory-item-name"]'),
    price: () => cy.get('[data-test="inventory-item-price"]'),
    checkout: () => cy.get('[data-test="checkout"]')
  };

  doCheckout() {
    this.elements.checkout().click()
  }
}

export const cartPage = new CartPage();
