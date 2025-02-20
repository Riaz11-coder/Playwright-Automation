import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");
  });
  test("1", async ({ page }) => {
    let webTable = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

    let rows = await webTable.locator("//tr").all();

    expect(rows.length).toBe(9);

    let columns = await webTable.locator("//th").all();

    expect(columns.length).toBe(13);

    let cells = await webTable.locator("//td").all();

    expect(cells.length).toBe(104);
    for (let cell of cells) {
      console.log((await cell.innerText()) + " ");
    }
  });

  test("2", async ({ page }) => {
    let webTable = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

    let rows = await webTable.locator("//tr").all();

    //create a loop that can print each cells data of each row.
    for (let i = 1; i < rows.length - 1; i++) {
      let row = rows[i];
      let cells = await row.locator("td").all();
      let rowData = [];
      for (let cell of cells) {
        rowData.push(await cell.innerText());
      }
      console.log(rowData.join(" | "));
      console.log("-----------------");
    }
  });

  test("3", async ({ page }) => {
    let webTable = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

    let checkBoxes = await webTable.locator("//input[@type='checkbox']").all();

    for(let checkbox of checkBoxes) {
      await checkbox.check();
      console.log("Checkbox checked");
      expect(await checkbox.isChecked()).toBeTruthy();
    }



  });
});
