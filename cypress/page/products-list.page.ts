export class ProductsListPage {
  private readonly firstProduct = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
  private readonly proceedToCheckoutButton = "[style*='display: block;'] .button-container > a";

  public addFirstProductToCart() {
    cy.get(this.firstProduct)
      .click();
  }

  public proceedToCheckout() {
    cy.get(this.proceedToCheckoutButton)
      .click();
  }
}
