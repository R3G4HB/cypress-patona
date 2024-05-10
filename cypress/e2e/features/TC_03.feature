Feature: Test Case 02

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Add To Cart
        When Login to website with correct username "standard_user" and valid password "secret_sauce"
        Then add a product
        Then do a checkout via cart page
        Then fill in all required information
        | firstName | lastName | postalCode |
        | Harsh | Bhatia | 380001 |
        Then complete checkout
        Then verify checkout is completed
        Then verify order dispatched message