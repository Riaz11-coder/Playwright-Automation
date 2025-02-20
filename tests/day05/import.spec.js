import { Hello, number, letter } from "./export.spec.js";
import { test, expect } from "@playwright/test";

console.log(Hello("Roger"));

console.log(number);

console.log(letter);

