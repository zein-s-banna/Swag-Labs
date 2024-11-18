@sanityTest @inventoryPage @TC-1
Feature: Check Add Product to -Shopping Cart- Functionality

    Scenario:#1 Check Add Product to -Shopping Cart- successfully
        Given User is logged in and on the Inventory Page
        When User click on 'Add to cart' button in Inventory Page
        Then 'Add to cart' button should be clicked
        And Shopping cart count should be updated
        And Product should be added to the 'Shopping Cart'