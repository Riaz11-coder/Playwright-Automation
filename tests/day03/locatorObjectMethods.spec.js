import { test } from "@playwright/test";

test.describe("User Story", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
  });
  test("Check Method", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();
   

    let checkBox1 = page.locator("//input[@id='box1']");

    await checkBox1.check();

    
  });

  test("Uncheck Method", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();
    

    let checkBox2 = page.locator("//input[@id='box2']");

    await checkBox2.uncheck();

    
  });

  test("Select Option", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");

    await dropdownLink.click();

    

    let dropdownBoxSimple = page.locator("//select[@id='dropdown']");
    //Select by value
    //await dropdownBoxSimple.selectOption("1");
    //select by text
    //await dropdownBoxSimple.selectOption({label:"Option 1"});
    //slect by index
    await dropdownBoxSimple.selectOption({ index: 1 });
    

  });
});
