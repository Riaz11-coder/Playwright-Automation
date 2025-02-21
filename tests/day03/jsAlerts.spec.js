import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/javascript_alerts");
    });
  test("alert", async ({ page }) => {
        page.on("dialog", async (alert) => {
            console.log(`Alerts Message: ${alert.message()}`);
            
            await alert.accept();
        });

        let alertButton = page.locator("button[onclick='jsAlert()']");
        await alertButton.click();
        


  });

  test("confirmation", async ({ page }) => {
         page.on("dialog", async (alert) => {
           console.log(`Alerts Message: ${alert.message()}`);
           await page.waitForTimeout(3000);
             await alert.dismiss()});

        let confirmButton = page.locator("button.btn.btn-primary[onclick='jsConfirm()']");
        await confirmButton.click();
        

  });

  test("prompt", async ({ page }) => {
         page.on("dialog", async (alert) => {
           console.log(`Alerts Message: ${alert.message()}`);
           
           await alert.accept("Automation");;
         });

        let promptButton = page.locator("button[onclick='jsPrompt()']");
        await promptButton.click();
        

  });
});
