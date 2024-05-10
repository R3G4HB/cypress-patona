Feature: Test Case 01

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Incorrect Password Login
        When Login to website with correct username and invalid password
            | username      | password     |
            | standard_user | testPassword |
        Then Verify password validation message "Epic sadface: Username and password do not match any user in this service"