export class DressesListPage {
  private readonly dressItem: string;
  private readonly dressName: string;

  constructor() {
    this.dressItem = ".product-container";
    this.dressName = `${this.dressItem} .product-name`;
  }

  public getDressProducts() {
    return cy.get(this.dressItem);
  }

  public validateItemsNumber(itemsNumber: number) {
    cy.get(this.dressItem)
      .should("have.length", itemsNumber);
  }

  public validateItemsNames(names: string[]) {
    cy.get(this.dressName)
      .each((item, index) => {
        cy.wrap(item)
          .should("contain.text", names[index]);
      });
  }
}
