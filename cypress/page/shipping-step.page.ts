export class ShippingStepPage {
  private readonly termsOfServiceCheckbox = "#cgv";
  private readonly proceedToCheckoutButton = "[name=processCarrier]";

  public acceptTerms() {
    cy.get(this.termsOfServiceCheckbox)
      .check();
  }

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutButton)
      .click();
  }
}
