import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/iframe");
    });
  test("iFrames", async ({ page }) => {
    

    let iFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");

    let iFrameBody = iFrame.locator("//body[@id='tinymce']");

    
    await iFrameBody.press("Control+A", "Backspace");
    
    await iFrameBody.fill("Hello, World!");

    await expect(iFrameBody).toHaveText("Hello, World!");

  });

  
});
