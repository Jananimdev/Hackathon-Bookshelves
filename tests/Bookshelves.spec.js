const { test } = require("@playwright/test");
const Home = require("../Pages/Home");
const Products = require("../Pages/Products");
const input = require("../data/input.json");

let page;
let home;
let product;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  home = new Home(page);
  product = new Products(page);
});

test.afterAll(async () => {
  await page.close();
});

test("Bookshelves Functionality", async () => { 
  
  await test.step("Navigate to Urban Ladder homepage", async () => {
    await home.goTo();
  });

  await test.step("Search for Bookshelves and handle popup", async () => {
    await home.clickProduct(input.searchProduct);
    await product.closePopup();
  });

  await test.step("Apply price filter for bookshelves", async () => {
    await product.filterPriceRange();
  });

  await test.step("Apply storage type filter: Open", async () => {
    await product.clickStorageType();
  });

  await test.step("Apply 'Out of Stock' filter", async () => {
    await product.clickOutOfStock();
  });

  await test.step("Retrieve and save Bookshelves details", async () => {
    await product.getProducts();
  });
});