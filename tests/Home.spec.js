const { test, expect } = require("@playwright/test");
const Home = require("../Pages/Home");
const Products = require("../Pages/Products");
const ProductDetail = require("../Pages/ProductDetail");
const input = require("../data/input.json");

test.beforeEach(async ({ page }) => {
  const home = new Home(page);
  await home.goTo();
});

test("Bookshelves", async ({ page }) => {
  const home = new Home(page);
  const product = new Products(page);

  await test.step("Click BookShelves", async () => {
    await home.clickProduct(input.searchProduct);
    await product.closePopup();
    await page.waitForTimeout(2000);
  });

  await test.step("Apply filters", async () => {
    await product.filterPriceRange();
    await page.waitForTimeout(2000);
    await product.clickStorageType();
    await page.waitForTimeout(2000);
    await product.clickOutOfStock();
    await page.waitForTimeout(2000);
  });

  await test.step("Get BookShelves Details", async () => {
    await product.getProducts();
    await page.screenshot({ path: 'screenshot/products.png' });
  });
});

test("Display collections", async ({ page }) => {
  const home = new Home(page);

  await test.step("Get Collection List", async () => {
    await home.hoverCollection();
    await home.getListItems();
    await page.screenshot({ path: 'screenshot/collections.png' });
  });
});

test("Giftcards", async ({ page, context }) => {
  const home = new Home(page);
  const products = new Products(page);

  let product;
  let page2;

  await test.step("Searching the product", async () => {
    await home.fillInput(input.searchInput);
    await home.clickSearchButton();
  });

  await test.step("Click Product and checkout", async () => {
    page2 = await products.clickProduct();
    await page2.waitForLoadState();
    product = new ProductDetail(page2);
    await product.clickAddToCart();
    await product.clickCheckOut();
    await page2.waitForTimeout(3000);
  });

  await test.step("Enter Invalid email credentials", async () => {
    await product.enterEmail(input.invalidEmail);
    await page2.keyboard.press("Tab");
    await product.getEmailError();
    await page.screenshot({ path: 'screenshot/error.png' });
  });
});
