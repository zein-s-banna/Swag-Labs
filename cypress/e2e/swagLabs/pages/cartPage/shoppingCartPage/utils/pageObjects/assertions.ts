import { Product } from "cypress/e2e/swagLabs/pages/inventoryPage/utils/types";

class ShoppingCartPageAssertions {
  checkShoppingCartCountValue(value: number) {
    if (value <= 0) {
      cy.get('[data-test="shopping-cart-link"]').should("have.text", "");
    } else {
      cy.get('[data-test="shopping-cart-link"]').should(
        "have.text",
        value.toString()
      );
    }
    return this;
  }

  checkProductDetailsByName(product: Product, isExist: boolean = true) {
    const productQuery = cy.contains(
      "[data-test=inventory-item-name]",
      product.name
    );

    if (isExist) {
      // Check if product exists and assert its details
      productQuery
        .should("exist")
        .parents("[data-test=inventory-item]")
        .within(() => {
          cy.get("[data-test=inventory-item-desc]").should(
            "have.text",
            product.description
          );
          cy.get("[data-test=inventory-item-price]").should(
            "have.text",
            product.price
          );
        });
    } else {
      productQuery.should("not.exist");
    }
    return this;
  }

  checkShoppingCartHasItems(hasItems = true) {
    if (hasItems) {
      cy.get("[data-test=inventory-item]").should("exist");
    } else {
      cy.get("[data-test=inventory-item]").should("not.exist");
    }
    return this;
  }

  checkShoppingCartPageIsOpen(isOpen = true) {
    cy.url().should(isOpen ? "include" : " not.include", "/cart");
    cy.get("[data-test=title]").should("have.text", "Your Cart");
    return this;
  }

  CheckCheckoutErrorMessage(message = "", isExist = true) {
    cy.get("[data-test=error]")
      .should("be.visible")
      .and(isExist ? "have.text" : "not.have.text", message);
    return this;
  }
}

export default ShoppingCartPageAssertions;
