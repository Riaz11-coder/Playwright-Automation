import { test } from "@playwright/test";

test("Bing Search", async ({ page }) => {

    await page.goto("https://www.bing.com");

    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@id='sb_form_q']");

    await searchBox.fill("Playwright!");

    await page.waitForTimeout(3000);

    await searchBox.press("Enter");

    await page.waitForTimeout(3000);
});
