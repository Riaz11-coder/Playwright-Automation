//const {test} = require("playwright/test");

import { test } from '@playwright/test';

test("Bing Search Page", async ({page}) => {

    await page.goto("https://www.bing.com");

    await page.waitForTimeout(3000);
});