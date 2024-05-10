import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
});

When("Login to website with correct username and invalid password", (table) => {
  table.hashes().forEach((row) => {
    loginPage.submitLogin(row.username, row.password)
  });
});

Then("Verify password validation message {string}", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
