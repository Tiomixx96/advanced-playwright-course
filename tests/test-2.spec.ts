import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://ultimateqa.com/simple-html-elements-for-automation/"
  );
  await page.getByRole("checkbox").nth(1).check();
});
