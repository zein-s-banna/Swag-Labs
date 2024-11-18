@negativeTest @loginPage @TC-4
Feature: Check logging with Invalid User -Non Existing-

    Scenario:#1 Check logging with Invalid User -Non Existing-
        Given User open Login Page and isn't logged in
        When User try to login with a non-existing user
        Then User should remain on the Login Page
        And User should see a message "Epic sadface: Username and password do not match any user in this service"