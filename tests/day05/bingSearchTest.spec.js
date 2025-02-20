import {test, expect} from '@playwright/test';
import SearchPage from './SearchPage.js';
test('Bing Search Test', async ({ page }) => {

let Search = new SearchPage(page);

await page.goto('https://www.bing.com');

await Search.search('Playwright');

await expect(page).toHaveTitle('Playwright - Search');

});
