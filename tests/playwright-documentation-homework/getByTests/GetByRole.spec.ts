import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name: "FREE STRATEGY SESSION" }).click();
  await page.getByRole("textbox", { name: "Name*" }).click();
  await page.pause();
});
