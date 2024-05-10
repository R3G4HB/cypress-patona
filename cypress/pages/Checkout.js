class Checkout {
  elements = {
    firstName: () => cy.get('[data-test="firstName"]'),
    lastName: () => cy.get('[data-test="lastName"]'),
    postalCode: () => cy.get('[data-test="postalCode"]'),
    continue: () => cy.get('[data-test="continue"]'),
    finish: () => cy.get('[data-test="finish"]'),
    completeHeader: () => cy.get('[data-test="complete-header"]'),
    dispatchMessage: () => cy.get('[data-test="complete-text"]')
  };

  fillInformation(firstName, lastName, postalCode) {
    this.elements.firstName().type(firstName)
    this.elements.lastName().type(lastName)
    this.elements.postalCode().type(postalCode)
    this.elements.continue().click()
  }

  finishCheckout() {
    this.elements.finish().click()
  }
}

export const checkout = new Checkout();
