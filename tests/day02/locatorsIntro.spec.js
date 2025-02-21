import { test } from "@playwright/test";

test("Bing Search", async ({ page }) => {

    await page.goto("https://www.bing.com");
    let searchBox = page.locator("//textarea[@id='sb_form_q']");

    await searchBox.fill("Playwright!");

     await searchBox.press("Enter");

    
});
