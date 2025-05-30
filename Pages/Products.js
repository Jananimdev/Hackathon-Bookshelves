const fs = require("fs");
const path = require("path");

class Products {
  constructor(page) {
    this.page = page;
  }

  async filterPriceRange() {
    await this.page
      .locator("li[data-group='price'] div[class='gname']")
      .hover();
    await this.page.locator("#price_limit_9000-15999").check();
    await this.page.waitForSelector(".productlist.withdivider li", { state: 'visible' }); 
  }

  async clickStorageType() {
    const storageTypeDropdown = this.page.locator("//li[@data-group='storage type']");
    const storageType = this.page.locator("#filters_storage_type_Open");
    await storageTypeDropdown.hover();
    await storageType.waitFor({ state: 'visible' });
    await storageType.check();
    await this.page.waitForSelector(".productlist.withdivider li", { state: 'visible' }); 
  }

  async clickOutOfStock() {
    const outOfStock = this.page.locator("#filters_availability_In_Stock_Only");
    await outOfStock.check();
    await this.page.waitForSelector(".productlist.withdivider li", { state: 'visible' }); 
  }

  async closePopup() {
    const popup = this.page.locator("#authentication_popup");
    const closepopup = this.page.locator("//a[normalize-space()='Close']");
    await popup.waitFor({ state: 'visible' }); 
    await closepopup.click();
    await popup.waitFor({ state: 'hidden' }); 
  }

  async clickProduct() {
    const product = this.page.locator('//li[@class="product  hovercard"][1]');
    await product.click();
    const newPagePromise = this.page.waitForEvent("popup");
    const newPage = await newPagePromise;
    await newPage.waitForLoadState('domcontentloaded'); 
    return newPage;
  }

  async getProducts() {
    await this.page.locator(".productlist.withdivider li").first().waitFor({ state: 'visible' });

    const productCount = 3;
    let result = [];
    for (let i = 0; i < productCount; i++) {
      const productTitle = this.page.locator(".product-info-block .product-title .name");
      const productPrice = this.page.locator(".price-number span");

      await productTitle.nth(i).waitFor({ state: 'visible' });
      await productPrice.nth(i).waitFor({ state: 'visible' });

      const title = await productTitle.nth(i).textContent();
      const price = await productPrice.nth(i).textContent();
      result.push({ title, price });
    }
    let outputJson = {
      products_length: result.length,
      products: result,
    };
    const outputPath = path.join(__dirname,"..","data","bookShelvesOutput.json");
    fs.writeFileSync(outputPath, JSON.stringify(outputJson, null, 2));
  }
}

module.exports = Products;