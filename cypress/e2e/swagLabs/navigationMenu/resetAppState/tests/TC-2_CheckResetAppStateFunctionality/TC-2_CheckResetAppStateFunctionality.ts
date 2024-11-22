import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ShoppingCartPageActions from "cypress/e2e/swagLabs/pages/cartPage/shoppingCartPage/utils/actions";
import ShoppingCartPageAssertions from "cypress/e2e/swagLabs/pages/cartPage/shoppingCartPage/utils/assertions";
import InventoryPageAssertions from "cypress/e2e/swagLabs/pages/inventoryPage/utils/assertions";
import { Product } from "cypress/e2e/swagLabs/pages/inventoryPage/utils/types";
import NavigationMenuActions from "../../../utils/actions";
import InventoryPageActions from "cypress/e2e/swagLabs/pages/inventoryPage/utils/actions";

const inventoryPageActions = new InventoryPageActions();
const inventoryPageAssertions = new InventoryPageAssertions();
const shoppingCartPageActions = new ShoppingCartPageActions();
const shoppingCartPageAssertions = new ShoppingCartPageAssertions();
const navigationMenuActions = new NavigationMenuActions();

let product: Product;
let cartCount: number;
let productIndex: number;

before(() => cy.login());

Given("User is logged in and on the Inventory Page", () => {
  shoppingCartPageActions
    .getShoppingCartCount()
    .then((count) => (cartCount = count));

  inventoryPageActions
    .getProductsIndexesByAddToCartStatus()
    .then((ItemsIndexes) => (productIndex = ItemsIndexes[0]));

  inventoryPageActions
    .getProductDetailsByIndex(productIndex)
    .then((itemProduct) => (product = { ...itemProduct }));
});

Given("Product is already added to the 'Shopping Cart'", () => {
  inventoryPageActions.clickAddToCartButton(productIndex);
});

Given("Navigation menu is open", () => {
  navigationMenuActions.openNavigationMenu();
});

When("User click on the 'Reset App State' menu item", () => {
  navigationMenuActions.clickResetAppStateMenuItem();
});

Then("'Remove' button should be updated to be 'Add to Cart'", () => {
  inventoryPageAssertions.checkAddToCartButtonIsClicked(productIndex, false);
});

Then("Shopping cart count should be updated", () => {
  shoppingCartPageAssertions.checkShoppingCartCountValue(cartCount - 1);
});

Then("Product should be removed from the 'Shopping Cart'", () => {
  shoppingCartPageActions.openShoppingCartPage();
  shoppingCartPageAssertions.checkProductDetailsByName(product, false);
});
