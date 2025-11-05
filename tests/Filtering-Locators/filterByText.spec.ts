import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await page
    .locator(".inventory_item_description")
    .filter({ hasText: "Sauce Labs Fleece Jacket" })
    .getByRole("button", { name: "Add to cart" })
    .click();

  await page.locator(".shopping_cart_link").click();
});
