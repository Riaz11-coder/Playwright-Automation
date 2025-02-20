import { test } from "@playwright/test";

test.describe("User Story", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });
  test("Check Method", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();
    // pause for three  seconds.
    await page.waitForTimeout(3000);

    let checkBox1 = page.locator("//input[@id='box1']");

    await checkBox1.check();

    // pause for three  seconds.
    await page.waitForTimeout(3000);
  });

  test("Uncheck Method", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();
    // pause for three  seconds.
    await page.waitForTimeout(3000);

    let checkBox2 = page.locator("//input[@id='box2']");

    await checkBox2.uncheck();

    // pause for three  seconds.
    await page.waitForTimeout(3000);
  });

  test("Select Option", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");

    await dropdownLink.click();

    // pause for three  seconds.
    await page.waitForTimeout(3000);

    let dropdownBoxSimple = page.locator("//select[@id='dropdown']");
    //Select by value
    //await dropdownBoxSimple.selectOption("1");
    //select by text
    //await dropdownBoxSimple.selectOption({label:"Option 1"});
    //slect by index
    await dropdownBoxSimple.selectOption({ index: 1 });
    // pause for three  seconds.
    await page.waitForTimeout(3000);


  });
});
