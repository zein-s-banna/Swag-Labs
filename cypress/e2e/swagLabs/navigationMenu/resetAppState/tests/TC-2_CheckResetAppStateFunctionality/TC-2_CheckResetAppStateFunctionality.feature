@sanityTest @navigationMenu @resetAppState @TC-2
Feature: Check Reset App State Functionality

    Scenario:#1 Check Reset App State successfully
        Given User is logged in and on the Inventory Page
        And Product is already added to the 'Shopping Cart'
        And Navigation menu is open
        When User click on the 'Reset App State' menu item
        # Then 'Remove' button should be updated to be 'Add to Cart' # Bug
        And Shopping cart count should be updated
        And Product should be removed from the 'Shopping Cart'