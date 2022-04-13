export class AddressStepPage {
  private readonly proceedToCheckoutButton = "[name=processAddress]";

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutButton)
      .click();
  }
}
