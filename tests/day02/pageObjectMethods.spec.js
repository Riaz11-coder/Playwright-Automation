import { test } from "@playwright/test";

test("Getting Page Title", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  // Get the title of the page.
  let pageTitle = await page.title();

  console.log(pageTitle);
});

test("URL", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let pageURL = page.url();

  console.log(pageURL);
});


test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  // three second wait.
  await page.waitForTimeout(3000);

  // Set the window size to 1440x1080 pixels.
  await page.setViewportSize({ width: 1440, height: 1080 });

  // three second wait.
  await page.waitForTimeout(3000);
});
