import LoginPageActions from "cypress/e2e/swagLabs/pages/loginPage/utils/pageObjects/actions";
import { DEFAULT_USER } from "../e2e/swagLabs/constants";
import { UserCredentials } from "../e2e/swagLabs/types";

const loginPageActions = new LoginPageActions();

declare global {
  namespace Cypress {
    interface Chainable {
      login: (user?: UserCredentials) => Cypress.Chainable;
    }
  }
}

const mainLogin = (user = DEFAULT_USER) => {
  // Log the selected user (for debugging purposes)
  cy.log(`Logging in as: ${user}`);

  loginPageActions
    .openLoginPage()
    .typeInUsernameInput(user.userName)
    .typeInPasswordInput(user.password)
    .clickLoginButton();
};

Cypress.Commands.add("login", (specificUser?: UserCredentials) => {
  mainLogin(specificUser);
});
