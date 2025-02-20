import { test, expect} from "@playwright/test";

test.describe("Assertions", () => {

    test.beforeEach(async({page}) => {
        await page.goto("https://practice.cydeo.com");
        expect(page.url()).toContain("practice");
       await  expect(page).toHaveTitle("Practice");
       expect(await page.title()).toBe("Practice");

        
    });
  test("Verify checkboxes are checked", async ({ page }) => {
        await page.getByText("Checkboxes").click();

        let checkBox1 = page.locator("//input[@id='box1']");

        let checkBox2 = page.locator("//input[@id='box2']");

        await checkBox1.check();

        await checkBox2.check();

        expect(await checkBox1.isChecked()).toBeTruthy();

        expect(await checkBox2.isChecked()).toBeTruthy();
        

  });

  test("Verify checkboxes are unchecked", async ({ page }) => {
        await page.getByText("Checkboxes").click();

        let checkBox1 = page.locator("//input[@id='box1']");

        let checkBox2 = page.locator("//input[@id='box2']");

        await checkBox1.uncheck();
        await checkBox2.uncheck();

        expect(await checkBox1.isChecked()).toBeFalsy();
        expect(await checkBox2.isChecked()).toBeFalsy();

  });

  test("Verify visible text", async ({ page }) => {
        let pageHeaderElement = page.locator("h1.h1 > span.h1y");

       await expect(pageHeaderElement).toHaveText("Test Automation Practice");

       let headerText = await pageHeaderElement.innerText();

       expect(headerText).toBe("Test Automation Practice");

       console.log(headerText);
  });
});
