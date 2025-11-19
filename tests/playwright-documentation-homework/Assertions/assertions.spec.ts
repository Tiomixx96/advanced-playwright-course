import { test, expect } from "@playwright/test";

test("nabigation to About author page", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/about/#main_content_wrap");
  await expect(page).toHaveURL(/about/);
  await expect(page.locator(".back-to-articles-btn")).toHaveText(
    "<- Back to the list of articles"
  );
  //   await expect(page).toHaveTitle("About author");
});

test("navigation to Home page from Abouth author", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/");

  await page.getByRole("button", { name: "About me" }).click();
  await page.getByRole("button", { name: "Home" }).click();

  await expect(page).not.toHaveURL(/about/);
  await expect(page).not.toHaveTitle("");
  await expect(page).toHaveURL(/ilarionhalushka/);
  await expect(page).toHaveTitle(/IT Blog by Ilarion Halushka/);
});
