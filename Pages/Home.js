const { expect } = require('allure-playwright');
const fs = require('fs')
const path = require('path')

class Home {
  constructor(page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("https://www.urbanladder.com/");
  }

  async fillInput(input) {
    const search = this.page.locator('#search');
    await expect(search).toBeEditable()
    await search.fill(input);
  }

  async clickSearchButton() {
    const searchButton = this.page.locator("#search_button");
    await expect(searchButton).toBeVisible()
    await searchButton.click();
  }

  async clickProduct(product) {
    let bookshelves = this.page.locator(`h4:has-text("${product}")`);
    await bookshelves.waitFor();
    await bookshelves.scrollIntoViewIfNeeded();
    await expect(bookshelves).toBeVisible()
    await bookshelves.click();
  }

  async hoverCollection(navItemText) {
    const navItem = this.page.locator(`.topnav_item:has(span.topnav_itemname:text("${navItemText}"))`);
    await navItem.screenshot({path:'screenshot/collections.png'});
    await navItem.hover();
    await this.getListItems(navItem);
  }

  async getListItems(navItemLocator) {
    const result = {};

    const sublistItems = await navItemLocator.locator(".sublist_item").all();

    for (const sublistItem of sublistItems) {
      const categoryTitleElement = sublistItem.locator(".taxontype a");
      const categoryTitle = await categoryTitleElement.textContent();

      const items = [];
      
      const subNavItems = await sublistItem.locator(".taxonslist a").all();
      for (const subNavItem of subNavItems) {
        items.push(await subNavItem.textContent());
      }
      result[categoryTitle.trim()] = items;
    }

    let outputJson = {
      data: result,
    };
    const outputPath = path.join(__dirname, "..", "data", "CollectionListOutput.json");
    fs.writeFileSync(outputPath, JSON.stringify(outputJson, null, 2));
  }
}

module.exports = Home;