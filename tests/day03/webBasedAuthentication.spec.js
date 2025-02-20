import { test, expect } from "@playwright/test";

test("Bypass the authentication by embedding the credentials into the URL", async ({ page }) => {

    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
    await page.waitForTimeout(3000);
});

test("Bypass authentication by encoding the credentials using base64 format", async ({ page }) => {
    
    let encodedCredentials = Buffer.from("admin:admin").toString("base64");

    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`});

    await page.goto("https://practice.cydeo.com/basic_auth");

    await page.waitForTimeout(3000);
});

