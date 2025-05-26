
class ProductDetail {
  constructor(page) {
    this.page = page
    this.addToCart = page.locator("#add-to-cart-button");
    this.checkOut = page.locator("#checkout-link");
    this.email = page.locator("#order_email");
    this.emailError = page.locator("//label[@for='order_email']");
  }
  async clickAddToCart() {
    await this.addToCart.click();
  }
  async clickCheckOut() {
    await this.checkOut.first().click();
  }
  async enterEmail(emailInp) {
    await this.email.fill(emailInp);
  }
  async getEmailError() {
    await this.emailError.waitFor();
    const errorMessage = await this.page
      .locator("//label[@for='order_email']")
      .textContent();
    console.log(errorMessage);
  }
}
module.exports = ProductDetail;
