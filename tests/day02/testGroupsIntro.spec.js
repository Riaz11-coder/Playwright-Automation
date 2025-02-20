import {test} from "@playwright/test";

test.describe("", () => {

    test.beforeAll(async () => {
        console.log("Before All Test Cases");
    });

    test.afterAll(async () => {
        console.log("After All Test Cases");
    });

    test.beforeEach(async () => {
        console.log("Before Each Test Case");
    });

    test.afterEach(async () => {
        console.log("After Each Test Case");
    });

    test("Test Case 1", async () => {
        console.log("Test Case 1 executed successfully! :)");
    });

    test("Test Case 2", async () => {
        console.log("Test Case 2 executed successfully! :)");
    });

    test("Test Case 3", async () => {
        console.log("Test Case 3 executed successfully! :)");
    });


});