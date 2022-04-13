export class ShopingCartPage {
  private readonly proceedToCheckoutButton = ".cart_navigation span";

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutButton)
      .click();
  }
}
