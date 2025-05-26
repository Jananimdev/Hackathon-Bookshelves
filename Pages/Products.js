const fs = require("fs");
const path = require("path");
class Products {
  constructor(page) {
    this.page = page;
    this.filterPrice = "#filters_price_max";

    this.storageTypeDropdown = page.locator("//li[@data-group='storage type']");
    this.storageType = page.locator("#filters_storage_type_Open");
    this.outOfStock = page.locator("#filters_availability_In_Stock_Only");
    this.productList = page.locator(".productlist.withdivider li");
    this.productTitle = page.locator(
      ".product-info-block .product-title .name"
    );
    this.productPrice = page.locator(".price-number span");

    this.product = page.locator('//li[@class="product  hovercard"][1]');
    this.popup = page.locator("#authentication_popup");
    this.closepopup = page.locator("//a[normalize-space()='Close']");
  }

  async filterPriceRange() {
    await this.page
      .locator("li[data-group='price'] div[class='gname']")
      .hover();
    await this.page.locator("#price_limit_9000-15999").check();
  }
  async clickStorageType() {
    await this.storageTypeDropdown.hover();
    await this.storageType.check();
  }
  async clickOutOfStock() {
    await this.outOfStock.check();
  }
  async closePopup() {
    await this.popup.waitFor();

    await this.closepopup.click();
  }
  async clickProduct() {
    await this.product.click();
    const newPagePromise = this.page.waitForEvent("popup");
    const newPage = await newPagePromise;
    return newPage;
  }
  async getProducts() {
    const productCount = 3;
    let result = [];
    for (let i = 0; i < productCount; i++) {
      const title = await this.productTitle.nth(i).textContent();
      const price = await this.productPrice.nth(i).textContent();
      result.push({ title, price });
    }
    let outputJson = {
      products_length: result.length,
      products: result,
    };
    const outputPath = path.join(
      __dirname,
      "..",
      "data",
      "bookShelvesOutput.json"
    );
    fs.writeFileSync(outputPath, JSON.stringify(outputJson, null, 2));
  }
}

module.exports = Products;
