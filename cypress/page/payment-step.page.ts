export class PaymentStepPage {
  private readonly bankwireButton = ".bankwire";
  private readonly confirmOrderButton = "#cart_navigation > button[type=submit]";
  private readonly confirmOrderMessage = "#center_column > div > p > strong";

  public payByBankWire() {
    cy.get(this.bankwireButton)
      .click();
  }

  public confirmOrder() {
    cy.get(this.confirmOrderButton)
      .click();
  }

  public confirmOrderMessageIs(expectedMessage: string) {
    cy.get(this.confirmOrderMessage)
      .should("have.text", expectedMessage);
  }
}
