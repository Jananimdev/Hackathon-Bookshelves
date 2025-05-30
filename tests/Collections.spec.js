const { test } = require("@playwright/test");
const Home = require("../Pages/Home");
const input = require("../data/input.json");

let page;
let home;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  home = new Home(page);
});

test.afterAll(async () => {
  await page.close();
});

test("Display Collections Functionality", async () => { 
  await test.step("Navigate to Urban Ladder homepage", async () => {
    await home.goTo();
  });
  await test.step("Hover over Collections and get list items", async () => {
    await home.hoverCollection(input.navItem);
    
  });
});