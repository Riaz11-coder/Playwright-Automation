import { test, expect } from "@playwright/test";

test("verify all links are displayed and enabled", async ({ page }) => {
  // Step 1 & 2: Open browser and navigate to the page
  await page.goto("https://practice.cydeo.com/");
    
  // Step 3: Verify URL contains "practice.cydeo"
  await expect(page).toHaveURL(/practice\.cydeo/);
   
  // Step 4: Verify title is "Practice"
  await expect(page).toHaveTitle("Practice");
   
  // Step 5: Verify all links under the <ul> HTML tag are visible and clickable
  const links = page.locator("//ul[@class='list-group']//a");
  const count = await links.count();
    
  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
  }
  
});
