class InventoryPageAssertions {
  checkAddToCartButtonIsClicked(index = 0, isClicked = true) {
    cy.get("[data-test=inventory-item]")
      .eq(index)
      .find("button")
      .should("have.text", isClicked ? "Remove" : "Add to cart");
    return this;
  }
}

export default InventoryPageAssertions;
