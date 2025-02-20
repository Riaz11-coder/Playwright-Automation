import { test, expect} from "@playwright/test";

test.describe("Test Group", () => {

    let linkElements;

    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com");
        linkElements = await page.locator("//ul[@class='list-group']/li/a").all();
    });
  test("Verify that there are excatly 50 link elements within <ul> tag", async ({ page }) => {

        

        expect(linkElements.length).toBe(50);



  });

  test("Verify that each of the 50 link elements within the <ul> tag is visible and clickable", async ({ page }) => {
        
          for(let e of linkElements) {
            await expect(e).toBeVisible();
             expect(await e.isVisible()).toBeTruthy();

             await expect(e).toBeEnabled();
             expect(await e.isEnabled()).toBeTruthy();
          }

  });

  test("Verify that each of the link elements within the <ul> tag has a href attribute", async ({ page }) => {
        

          for(let e of linkElements) {
            await expect(e).toHaveAttribute("href");
            console.log(await e.getAttribute("href"));
          }

  });
});
