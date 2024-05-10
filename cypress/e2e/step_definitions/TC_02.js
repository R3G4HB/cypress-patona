import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
import {inventoryPage} from '@pages/InventoryPage'
import {cartPage} from '@pages/CartPage'

When("Login to website with correct username {string} and valid password {string}", (username,password) => {
  loginPage.submitLogin(username,password)
  cy.url().should("contains", "/inventory.html");
});

Then("do filter dropdown {string}", (dropdown) => {
  inventoryPage.selectDropdown(dropdown)
});

Then("add first product in cart", () => {
  inventoryPage.addToCardFirst()
});

Then("add last product in cart", () => {
  inventoryPage.addToCardLast()
  inventoryPage.goToCart()
});

Then("verify first product description {string} and price {string}", (desc,price) => {
  cartPage.elements.description().first().should("have.text", desc);
  cartPage.elements.price().first().should("have.text", price);
});

Then("verify last product description {string} and price {string}", (desc,price) => {
  cartPage.elements.description().last().should("have.text", desc);
  cartPage.elements.price().last().should("have.text", price);
});