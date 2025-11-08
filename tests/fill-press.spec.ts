import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/");
  await page.getByLabel("search...").click();
  await page.getByLabel("search...").fill("Hello ");

  await page.getByLabel("search...").pressSequentially("W O R L D ");
  await page.locator("#best-articles").click();
});
