# Test info

- Name: Bookshelves Functionality
- Location: C:\Users\2398035\OneDrive - Cognizant\Desktop\Hackathon-Bookshelves\tests\Bookshelves.spec.js:21:1

# Error details

```
TimeoutError: browserType.launch: Timeout 180000ms exceeded.
Call log:
  - <launching> C:\Windows\system32\config\systemprofile\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe --disable-field-trial-config --disable-background-networking --disable-background-timer-throttling --disable-backgrounding-occluded-windows --disable-back-forward-cache --disable-breakpad --disable-client-side-phishing-detection --disable-component-extensions-with-background-pages --disable-component-update --no-default-browser-check --disable-default-apps --disable-dev-shm-usage --disable-extensions --disable-features=AcceptCHFrame,AutoExpandDetailsElement,AvoidUnnecessaryBeforeUnloadCheckSync,CertificateTransparencyComponentUpdater,DeferRendererTasksAfterInput,DestroyProfileOnBrowserClose,DialMediaRouteProvider,ExtensionManifestV2Disabled,GlobalMediaControls,HttpsUpgrades,ImprovedCookieControls,LazyFrameLoading,LensOverlay,MediaRouter,PaintHolding,ThirdPartyStoragePartitioning,Translate --allow-pre-commit-input --disable-hang-monitor --disable-ipc-flooding-protection --disable-popup-blocking --disable-prompt-on-repost --disable-renderer-backgrounding --force-color-profile=srgb --metrics-recording-only --no-first-run --enable-automation --password-store=basic --use-mock-keychain --no-service-autorun --export-tagged-pdf --disable-search-engine-choice-screen --unsafely-disable-devtools-self-xss-warnings --headless --hide-scrollbars --mute-audio --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4 --no-sandbox --user-data-dir=C:\Windows\TEMP\playwright_chromiumdev_profile-FCiN1Z --remote-debugging-pipe --no-startup-window
  - <launched> pid=29832
  - [pid=29832][err] [0603/084729.042:WARNING:net\dns\dns_config_service_win.cc:605] Failed to read DnsConfig.

```

# Test source

```ts
   1 | const { test } = require("@playwright/test");
   2 | const Home = require("../Pages/Home");
   3 | const Products = require("../Pages/Products");
   4 | const input = require("../data/input.json");
   5 |
   6 | let page;
   7 | let home;
   8 | let product;
   9 |
  10 | test.beforeAll(async ({ browser }) => {
  11 |   const context = await browser.newContext();
  12 |   page = await context.newPage();
  13 |   home = new Home(page);
  14 |   product = new Products(page);
  15 | });
  16 |
  17 | test.afterAll(async () => {
  18 |   await page.close();
  19 | });
  20 |
> 21 | test("Bookshelves Functionality", async () => { 
     | ^ TimeoutError: browserType.launch: Timeout 180000ms exceeded.
  22 |   
  23 |   await test.step("Navigate to Urban Ladder homepage", async () => {
  24 |     await home.goTo();
  25 |   });
  26 |
  27 |   await test.step("Search for Bookshelves and handle popup", async () => {
  28 |     await home.clickProduct(input.searchProduct);
  29 |     await product.closePopup();
  30 |   });
  31 |
  32 |   await test.step("Apply price filter for bookshelves", async () => {
  33 |     await product.filterPriceRange();
  34 |   });
  35 |
  36 |   await test.step("Apply storage type filter: Open", async () => {
  37 |     await product.clickStorageType();
  38 |   });
  39 |
  40 |   await test.step("Apply 'Out of Stock' filter", async () => {
  41 |     await product.clickOutOfStock();
  42 |   });
  43 |
  44 |   await test.step("Retrieve and save Bookshelves details", async () => {
  45 |     await product.getProducts();
  46 |     await page.screenshot({ path: 'screenshot/products.png' });
  47 |   });
  48 | });
```