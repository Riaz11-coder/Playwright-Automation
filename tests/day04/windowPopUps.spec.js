import { test, expect } from "@playwright/test";

test.describe("Window PopUps", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/windows");
    });


  

  test("1", async ({ page }) => {
   let promisedNewPageEvent =  page.waitForEvent("popup");

   await page.click("text='Click Here'");

   let newPage = await promisedNewPageEvent;
   
   expect(await newPage.title()).toBe("New Window");
   expect(await page.title()).toBe("Windows");

    
    await page.bringToFront();

  let firstWindowElement =  page.getByText("Opening a new window");

  await expect(firstWindowElement).toBeVisible();

  console.log(firstWindowElement);

    
    await newPage.bringToFront();

  let secondWindowElement = newPage.getByText("New Window");

  await expect(secondWindowElement).toBeVisible();

  console.log(secondWindowElement);

   

  });

  
});
