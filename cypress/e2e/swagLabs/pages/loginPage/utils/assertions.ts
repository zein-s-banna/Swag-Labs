class LoginPageAssertions {
  checkLoginPageIsOpen(isOpen = true) {
    cy.url().should(
      isOpen ? "include" : " not.include",
      "https://www.saucedemo.com/"
    );
    cy.get("[data-test=login-button]").should("have.value", "Login");
    return this;
  }

  CheckLoginErrorMessage(message = "", isExist = true) {
    cy.get("[data-test=error]")
      .should("be.visible")
      .and(isExist ? "have.text" : "not.have.text", message);
    return this;
  }
}

export default LoginPageAssertions;
