class ShoppingCartPageActions {
  getShoppingCartCount(): Cypress.Chainable<number> {
    return cy
      .get('[data-test="shopping-cart-link"]')
      .invoke("text")
      .then((text) => {
        return parseInt(text) || 0;
      });
  }

  openShoppingCartPage() {
    cy.get('[data-test="shopping-cart-link"]').click();
    return this;
  }

  clickCheckoutButton() {
    cy.get('[data-test="checkout"]').click();
    return this;
  }
}

export default ShoppingCartPageActions;
