import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ultimateqa.com/");
  await page.getByAltText("programmer").click();
});
