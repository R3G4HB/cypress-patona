Feature: Test Case 02

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Add To Cart
        When Login to website with correct username "standard_user" and valid password "secret_sauce"
        Then do filter dropdown "Price (low to high)"
        Then add first product in cart
        Then add last product in cart
        Then verify first product description "Sauce Labs Onesie" and price "$7.99"
        Then verify last product description "Sauce Labs Fleece Jacket" and price "$49.99"