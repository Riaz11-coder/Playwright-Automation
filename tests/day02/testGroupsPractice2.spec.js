import { test } from "@playwright/test";

test.describe("User Story", () => {

    test.beforeEach(async({page}) => {
        await page.goto("https://practice.cydeo.com");
    });
  test("1", async ({ page }) => {});

  test("2", async ({ page }) => {});

  test("3", async ({ page }) => {});
});
