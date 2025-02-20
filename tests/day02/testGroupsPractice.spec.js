import {test} from "@playwright/test";

test.describe("User Story", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com");
    });

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);
    });

test("Test Page Title", async ({page}) => {
  console.log(await page.title() );
});

test("Test URL", async ({page}) => {
  console.log(page.url() );
});

});