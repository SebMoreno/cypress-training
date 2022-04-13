export class MenuContentPage {
  private readonly tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
  private readonly menuContentPageURL = "http://automationpractice.com/";

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu)
      .click();
  }
}
