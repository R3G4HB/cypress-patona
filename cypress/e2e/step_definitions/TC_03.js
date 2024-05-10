import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {inventoryPage} from '@pages/InventoryPage'
import {cartPage} from '@pages/CartPage'
import {checkout} from '@pages/Checkout'

Then("add a product", () => {
  inventoryPage.addToCardFirst()
});

Then("do a checkout via cart page", () => {
  inventoryPage.goToCart()
  cartPage.doCheckout()
});

Then("fill in all required information", (table) => {
  table.hashes().forEach((row) => {
    checkout.fillInformation(row.firstName, row.lastName, row.postalCode)
  });
});

Then("complete checkout", () => {
  checkout.finishCheckout()
});

Then("verify checkout is completed", () => {
  checkout.elements.completeHeader().should('be.visible')
});

Then("verify order dispatched message", () => {
  checkout.elements.dispatchMessage().should('be.visible')
});