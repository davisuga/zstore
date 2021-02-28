const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");
  // Click text=Try again
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
    page.click("text=Try again"),
  ]);
  // Click text=Mango$15,20 availableBUY >> button
  await page.click("text=Mango$15,20 availableBUY >> button");
  // Click text=Orange$30,8 availableBUY >> button
  await page.click("text=Orange$30,8 availableBUY >> button");
  // 8× click
  await page.click("text=Apple$20,15 availableBUY >> button", {
    clickCount: 8,
  });
  // 9× click
  await page.click("text=+", {
    clickCount: 9,
  });
  // Click [placeholder="Discount code"]
  await page.click('[placeholder="Discount code"]');
  // Click [placeholder="Discount code"]
  await page.click('[placeholder="Discount code"]');
  // Fill [placeholder="Discount code"]
  await page.fill('[placeholder="Discount code"]', "#100");
  // Press CapsLock
  await page.press('[placeholder="Discount code"]', "CapsLock");
  // Fill [placeholder="Discount code"]
  await page.fill('[placeholder="Discount code"]', "#100DOLLARS");
  // Click text=APPLY
  await page.click("text=APPLY");
  // Triple click [placeholder="Discount code"]
  await page.click('[placeholder="Discount code"]', {
    clickCount: 3,
  });
  // Fill [placeholder="Discount code"]
  await page.fill('[placeholder="Discount code"]', "#");
  // Press CapsLock
  await page.press('[placeholder="Discount code"]', "CapsLock");
  // Fill [placeholder="Discount code"]
  await page.fill('[placeholder="Discount code"]', "#30OFF");
  // Click text=APPLY
  await page.click("text=APPLY");
  // Click :nth-match(:text("-"), 2)
  await page.click(':nth-match(:text("-"), 2)');
  // Click :nth-match(:text("-"), 2)
  await page.click(':nth-match(:text("-"), 2)');
  // Click :nth-match(:text("-"), 2)
  await page.click(':nth-match(:text("-"), 2)');
  // Click :nth-match(:text("-"), 2)
  await page.click(':nth-match(:text("-"), 2)');
  // Click :nth-match(:text("-"), 2)
  await page.click(':nth-match(:text("-"), 2)');
  // 4× click
  await page.click(':nth-match(:text("-"), 2)', {
    clickCount: 4,
  });
  // Triple click [placeholder="Discount code"]
  await page.click('[placeholder="Discount code"]', {
    clickCount: 3,
  });
  // Fill [placeholder="Discount code"]
  await page.fill('[placeholder="Discount code"]', "");
  // Click text=APPLY
  await page.click("text=APPLY");
  // ---------------------
  await context.close();
  await browser.close();
})();
