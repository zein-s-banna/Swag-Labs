class NavigationMenuActions {
  openNavigationMenu() {
    cy.get("#react-burger-menu-btn").click();
    return this;
  }

  clickResetAppStateMenuItem() {
    cy.get("[data-test=reset-sidebar-link]").click();
    return this;
  }
}

export default NavigationMenuActions;
