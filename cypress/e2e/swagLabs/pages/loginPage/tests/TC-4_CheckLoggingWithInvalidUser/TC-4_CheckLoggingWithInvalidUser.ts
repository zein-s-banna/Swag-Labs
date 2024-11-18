import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPageActions from "../../utils/pageObjects/actions";
import { generateUniqueUser } from "cypress/e2e/swagLabs/constants";
import LoginPageAssertions from "../../utils/pageObjects/assertions";

const loginPageActions = new LoginPageActions();
const loginPageAssertions = new LoginPageAssertions();

const nonExistingUser = generateUniqueUser();

Given("User open Login Page and isn't logged in", () => {
  loginPageActions.openLoginPage();
});

When("User try to login with a non-existing user", () => {
  loginPageActions
    .typeInUsernameInput(nonExistingUser.userName)
    .typeInPasswordInput(nonExistingUser.password)
    .clickLoginButton();
});

Then("User should remain on the Login Page", () => {
  loginPageAssertions.checkLoginPageIsOpen();
});

Then("User should see a message {string}", (message: string) => {
  loginPageAssertions.CheckLoginErrorMessage(message);
});
