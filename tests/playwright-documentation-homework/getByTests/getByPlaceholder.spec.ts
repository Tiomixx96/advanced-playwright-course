import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://share-na2.hsforms.com/23I1BOSbZSkmmb1UP2OzAjw40m40a"
  );
  await page.getByPlaceholder("Enter text").last().fill("HI THERE!");
});
