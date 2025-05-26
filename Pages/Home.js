const fs = require('fs')
const path = require('path')
class Home {
  constructor(page) {
    this.page = page;
    this.search = page.locator('#search')
    this.searchButton = page.locator("#search_button");
    this.collection = page.locator("//li[@class='topnav_item newcollectionunit']");
  }
  async goTo() {
    await this.page.goto("https://www.urbanladder.com/");
  }
  
  async fillInput(input) {
    await this.search.fill(input);
  }
  async clickSearchButton() {
    await this.searchButton.click();
  }
  async clickProduct(product) {
    let bookshelves = this.page.locator(`h4:has-text("${product}")`);
    await bookshelves.waitFor();
    await bookshelves.scrollIntoViewIfNeeded();
    await bookshelves.click();
  }async hoverCollection() {
    await this.collection.hover();
  }
  async getListItems() {
    const list = await this.collection.locator(".sublist_item a").all();
    let result = [];
    for (let i = 0; i < list.length; i++) {
      result.push({ listName: await list[i].textContent() });
    }

    let outputJson = {
      list_length: result.length,
      lists: result,
    };
    const outputPath = path.join(__dirname,"..","data","CollectionListOutput.json");
    fs.writeFileSync(outputPath, JSON.stringify(outputJson, null, 2));
  }
}
module.exports = Home;