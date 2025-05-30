const { test } = require("@playwright/test");
const Home = require("../Pages/Home");
const Products = require("../Pages/Products");
const ProductDetail = require("../Pages/ProductDetail");
const input = require("../data/input.json");


test("Invalid Email Submission", async ({page}) => {
  
  let home = new Home(page);
  let products = new Products(page); 
  let productDetail;
  let page2; 

  await test.step("Navigate to Urban Ladder homepage", async () => {
    await home.goTo();
  });

  await test.step("Enter 'Giftcards' into search input", async () => {
    await home.fillInput(input.searchInput);
  });

  await test.step("Click search button", async () => {
    await home.clickSearchButton();
  });

  await test.step("Click on first product to open details (popup)", async () => {
    page2 = await products.clickProduct();
  });

  await test.step("Wait for product detail page to load", async () => {
    await page2.waitForLoadState('domcontentloaded');
    productDetail = new ProductDetail(page2);
  });

  await test.step("Click 'Add to Cart' button", async () => {
    await productDetail.clickAddToCart();
  });

  await test.step("Click 'Checkout' button", async () => {
    await productDetail.clickCheckOut();
  });

  await test.step("Enter invalid email address", async () => {
    await productDetail.enterEmail(input.invalidEmail);
  });

  await test.step("Trigger email validation by tabbing out", async () => {
    await page2.keyboard.press("Tab");
  });

  await test.step("Verify invalid email error message", async () => {
    await productDetail.getEmailError();
  });

  await test.step("Capture screenshot of error state", async () => {
    await page2.screenshot({ path: 'screenshot/error.png' });
  });

  if (page2) {
    await page2.close();
  }
});


