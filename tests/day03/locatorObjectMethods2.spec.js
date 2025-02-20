import { test } from "@playwright/test";

test.describe("Test Group", () => {

    test.beforeEach(async({page}) => {
        await page.goto("https://practice.cydeo.com");
    });
  test("Inner Text method", async ({ page }) => {
        let headerElement = page.locator("span.h1y");
        let actualText =  await headerElement.innerText();
        console.log(actualText);

  });

  test("Input Value Method", async ({ page }) => {
    let inputElement = page.getByText("Inputs");
    await inputElement.click();

    let inputBox = page.locator("input[type='number']");
    //wait three seconds.
    await page.waitForTimeout(3000);

    await inputBox.fill("50");

    //wait three seconds.
    await page.waitForTimeout(3000);

    let inputValue = await inputBox.inputValue();
    console.log(inputValue);
  });

  test("Get Attribute Method", async ({ page }) => {
        let headerElement = page.locator("text='A/B Testing'");

        let hrefLink = await headerElement.getAttribute("href");

        console.log(hrefLink);



  });
});
