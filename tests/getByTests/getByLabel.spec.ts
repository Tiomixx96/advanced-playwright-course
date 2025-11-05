import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/locators#filtering-locators");
  await page.getByLabel("Password").fill("secret");
  await page.pause();
});
