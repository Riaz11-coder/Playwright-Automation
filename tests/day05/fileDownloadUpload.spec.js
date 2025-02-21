import { test, expect } from "@playwright/test";
import path from 'path';
import fs from 'fs';
test.describe("File Download", () => {

   
  test("File Downloads", async ({ page }) => {
   let popUp =  page.waitForEvent("download");

   await page.goto("https://practice.cydeo.com/download");

   await page.click("text='NORMAL.jpg'");

   let download = await popUp;

   let downloadPath = path.join(__dirname, "./downloads", download.suggestedFilename());

   await download.saveAs(downloadPath);

   expect(fs.existsSync(downloadPath)).toBeTruthy();



  });

  test("File Uploads", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/upload");

    let filePath = path.join(__dirname, "./uploads","TestUpload.txt");

    

    await page.setInputFiles("//input[@id='file-upload']",filePath);

    

    await page.click("//input[@id='file-submit']");

    

    await expect(page.getByText("File Uploaded!")).toBeVisible();









  });

  test("3", async ({ page }) => {});
});
