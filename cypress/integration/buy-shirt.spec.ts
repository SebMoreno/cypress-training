import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShopingCartPage,
} from "../page";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.addFirstProductToCart();
    productsListPage.proceedToCheckout();
    shopingCartPage.proceedToCheckout();
    loginPage.typeEmail("aperdomobo@gmail.com");
    loginPage.typePassword("WorkshopProtractor");
    loginPage.signIn();
    addressStepPage.proceedToCheckout();
    shippingStepPage.acceptTerms();
    shippingStepPage.proceedToCheckout();
    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.confirmOrderMessageIs("Your order on My Store is complete.");
  });
});
