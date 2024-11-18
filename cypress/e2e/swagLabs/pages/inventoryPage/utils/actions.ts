import { Product } from "../types";

class InventoryPageActions {
  // Retrieve the indexes of products with a button that matches the specified status
  getProductsIndexesByAddToCartStatus(
    buttonStatus: "Add to cart" | "Remove" = "Add to cart"
  ): Cypress.Chainable<number[]> {
    const itemsWithStatus: number[] = [];

    return cy
      .get("[data-test=inventory-item]")
      .each(($item, index) => {
        cy.wrap($item)
          .find("button")
          .then(($button) => {
            if ($button.text() === buttonStatus) {
              itemsWithStatus.push(index);
            }
          });
      })
      .then(() => {
        return itemsWithStatus;
      });
  }

  // Retrieve the details of a product based on the specified index
  getProductDetailsByIndex(index = 0): Cypress.Chainable<Product> {
    return cy
      .get("[data-test=inventory-item]")
      .eq(index)
      .then(($item) => {
        const product: Product = {
          image: $item.find("img").attr("src"),
          name: $item.find("[data-test=inventory-item-name]").text(),
          description: $item.find("[data-test=inventory-item-desc]").text(),
          price: $item.find("[data-test=inventory-item-price]").text(),
        };
        return product;
      });
  }

  clickAddToCartButton(index = 0) {
    cy.get("[data-test=inventory-item]")
      .eq(index)
      .then(($item) => {
        cy.wrap($item).contains("button", "Add to cart").click();
      });
    return this;
  }
}

export default InventoryPageActions;
