import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/iframe");
    });
  test("iFrames", async ({ page }) => {
    let tinyMCEMessage = page.locator("div[aria-label='Close']");
    await tinyMCEMessage.click();

    let iFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");

    let iFrameBody = iFrame.locator("//body[@id='tinymce']");

    await page.waitForTimeout(3000);
    await iFrameBody.press("Control+A", "Backspace");
    //await iFrameBody.clear();
    await page.waitForTimeout(3000);
    await iFrameBody.fill("Hello, World!");
    await page.waitForTimeout(3000);

    await expect(iFrameBody).toHaveText("Hello, World!");

  });

  
});
