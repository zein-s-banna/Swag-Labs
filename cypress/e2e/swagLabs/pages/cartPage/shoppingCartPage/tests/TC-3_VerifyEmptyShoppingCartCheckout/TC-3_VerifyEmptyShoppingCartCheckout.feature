@negativeTest @shoppingCartPage @TC-3
Feature: Verify Checkout with Empty Shopping Cart

    Scenario:#1 Verify Checkout with Empty Shopping Cart
        Given User is logged in and Shopping Cart is Empty
        When User click 'Checkout' button
        # Bug
        Then User should remain on the 'Shopping Cart' Page
        # Missing Code Implementation
        And User should see a message "Cart is empty. Checkout cannot be completed."