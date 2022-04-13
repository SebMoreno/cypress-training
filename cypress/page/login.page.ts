export class LoginPage {
  private readonly emailInput = "#email";
  private readonly passwordInput = "#passwd";
  private readonly submitButton = "#SubmitLogin";

  public typeEmail(email: string) {
    cy.get(this.emailInput)
      .type(email);
  }

  public typePassword(password: string) {
    cy.get(this.passwordInput)
      .type(password);
  }

  public signIn() {
    cy.get(this.submitButton)
      .click();
  }
}
