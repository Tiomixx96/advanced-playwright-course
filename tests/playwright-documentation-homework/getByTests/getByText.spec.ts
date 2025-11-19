import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation#");
  await page.getByText("Big page with many elements").click();
  await page.getByText("A toggle").nth(1).click();
});
