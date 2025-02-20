import { test } from "@playwright/test";

test("Google", async ({ page }) => {
  await page.goto("https://www.google.com");

  // Create a wait that pauses for three seconds before closing the browser.
  await page.waitForTimeout(3000);

  

});
