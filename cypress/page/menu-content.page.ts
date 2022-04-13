export class MenuContentPage {
  private readonly tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
  private readonly menuContentPageURL = "http://automationpractice.com/";
  private readonly dressesMenu = "#block_top_menu > ul > li > [title=Dresses]";

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu)
      .click();
  }

  public goToDressesMenu(): void {
    cy.get(this.dressesMenu)
      .click();
  }
}
