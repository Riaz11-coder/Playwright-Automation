import { test, expect} from "@playwright/test";

test.describe("Mouse Actions", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com/");
        await page.waitForTimeout(3000);
    });

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);
    });
  test("Left click", async ({ page }) => {
    await page.click("text='A/B Testing'");


  });

  test("Right click", async ({ page }) => {
    await page.click("text='A/B Testing'", { button: "right" });

  });

  test("Hover", async ({ page }) => {
    await page.click("text='Hovers'");
    
    // await page.hover("//img[@alt='User Avatar']");

    let elements = await page.locator("//img[@alt='User Avatar']").all();

    for (let element of elements) {
        
        await element.hover();
        
    }

  });

  test("Mouse wheel scrolling", async ({ page }) => {
       await page.mouse.wheel(0,2000);

  });

  test("Scrolling to a specific element", async ({ page }) => {
    
    let inputsLink = page.getByText("Inputs");
    await inputsLink.scrollIntoViewIfNeeded();
    
    await inputsLink.click();


  });

  test("Drag and Drop", async ({ page }) => {
    await page.click("text='Drag and Drop'");
    
    //await page.dragAndDrop("#column-a", "#column-b");
    let squareA = page.locator("#column-a");
    let squareB = page.locator("#column-b");
    await squareA.dragTo(squareB);
    

  });
});
