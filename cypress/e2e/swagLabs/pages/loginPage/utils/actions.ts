class LoginPageActions {
  openLoginPage() {
    cy.visit("/");
    return this;
  }

  typeInUsernameInput(value: string) {
    cy.get('[data-test="username"]').type(value);
    return this;
  }

  typeInPasswordInput(value: string) {
    cy.get('[data-test="password"]').type(value);
    return this;
  }

  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
    return this;
  }
}

export default LoginPageActions;
