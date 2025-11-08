import { test, expect } from "@playwright/test";

// select options
test("test", async ({ page }) => {
  await page.goto(
    "https://ultimateqa.com/simple-html-elements-for-automation/"
  );
  // await page.getByRole("checkbox").last().check({ force: true });
  await page.getByRole("combobox").selectOption("opel");
});
