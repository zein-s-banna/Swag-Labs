import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import NavigationMenuActions from "cypress/e2e/swagLabs/navigationMenu/utils/pageObject/actions";
import ShoppingCartPageActions from "../../utils/pageObjects/actions";
import ShoppingCartPageAssertions from "../../utils/pageObjects/assertions";

const shoppingCartPageActions = new ShoppingCartPageActions();
const shoppingCartPageAssertions = new ShoppingCartPageAssertions();
const navigationMenuActions = new NavigationMenuActions();

before(() => cy.login());

Given("User is logged in and Shopping Cart is Empty", () => {
  navigationMenuActions.openNavigationMenu().clickResetAppStateMenuItem();
  shoppingCartPageActions.openShoppingCartPage();
  shoppingCartPageAssertions.checkShoppingCartHasItems(false);
});

When("User click 'Checkout' button", () => {
  shoppingCartPageActions.clickCheckoutButton();
});

Then("User should remain on the 'Shopping Cart' Page", () => {
  shoppingCartPageAssertions.checkShoppingCartPageIsOpen();
});

Then("User should see a message {string}", (message: string) => {
  shoppingCartPageAssertions.CheckCheckoutErrorMessage(message);
});
