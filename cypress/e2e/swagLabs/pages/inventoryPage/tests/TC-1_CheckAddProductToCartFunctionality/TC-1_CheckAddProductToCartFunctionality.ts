import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Product } from "../../utils/types";
import InventoryPageAssertions from "../../utils/assertions";
import ShoppingCartPageActions from "../../../cartPage/shoppingCartPage/utils/actions";
import ShoppingCartPageAssertions from "../../../cartPage/shoppingCartPage/utils/assertions";
import InventoryPageActions from "../../utils/actions";

const inventoryPageActions = new InventoryPageActions();
const inventoryPageAssertions = new InventoryPageAssertions();
const shoppingCartPageActions = new ShoppingCartPageActions();
const shoppingCartPageAssertions = new ShoppingCartPageAssertions();

let product: Product = {};
let cartCount: number;
let productIndex: number;

before(() => cy.login());

Given("User is logged in and on the Inventory Page", () => {
  shoppingCartPageActions
    .getShoppingCartCount()
    .then((count: number) => (cartCount = count));

  inventoryPageActions
    .getProductsIndexesByAddToCartStatus()
    .then((ItemsIndexes) => {
      productIndex = ItemsIndexes[0];
    });

  inventoryPageActions
    .getProductDetailsByIndex(productIndex)
    .then((itemProduct) => {
      product = { ...itemProduct };
    });
});

When("User click on 'Add to cart' button in Inventory Page", () => {
  inventoryPageActions.clickAddToCartButton(productIndex);
});

Then("'Add to cart' button should be clicked", () => {
  inventoryPageAssertions.checkAddToCartButtonIsClicked(productIndex);
});

Then("Shopping cart count should be updated", () => {
  shoppingCartPageAssertions.checkShoppingCartCountValue(cartCount + 1);
});

Then("Product should be added to the 'Shopping Cart'", () => {
  shoppingCartPageActions.openShoppingCartPage();
  shoppingCartPageAssertions.checkProductDetailsByName(product);
});
