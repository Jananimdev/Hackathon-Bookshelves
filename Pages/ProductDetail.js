class ProductDetail {
  constructor(page) {
    this.page = page;
  }

  async clickAddToCart() {
    const addToCart = this.page.locator("#add-to-cart-button");
    await addToCart.click();
  }

  async clickCheckOut() {
    const checkOut = this.page.locator("#checkout-link");
    await checkOut.first().click();
  }

  async enterEmail(emailInp) {
    const email = this.page.locator("#order_email");
    await email.fill(emailInp);
  }

  async getEmailError() {
    const emailError = this.page.locator("//label[@for='order_email']");
    await emailError.waitFor();
    const errorMessage = await emailError.textContent();
    console.log(errorMessage);
  }
}
module.exports = ProductDetail;