 import {expect} from "@playwright/test"
 export default class searchPage {
   constructor(page) {
     this.page = page;
     this.searchBox = "textarea#sb_form_q";
     //this.submitButton = "//path[@class='gray70_fill_sb']"
   }

   async search(query) {
     await this.page.click(this.searchBox); // Ensure the field is focused
     await this.page.type(this.searchBox, query, { delay: 100 }); // Simulate real typing speed
     await this.page.keyboard.press("Enter");
     await this.page.waitForSelector("#b_results", { state: "visible" });
   }
 }