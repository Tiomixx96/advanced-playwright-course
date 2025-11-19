import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");
//   await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
//   await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
//   await page.getByRole("button", { name: "Login" }).click();

//   await page
//     .locator(".inventory_item_description")
//     .filter({ hasText: "Sauce Labs Fleece Jacket" })
//     .getByRole("button", { name: "Add to cart" })
//     .click();

//   await page.locator(".shopping_cart_link").click();
// });

// test("test", async ({ page }) => {
//   await page.goto("https://ultimateqa.com/automation");
//   // Hover
//   await page.getByRole("link", { name: "Education 3" }).hover();
// });

// Keyboard
// test("test", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");

//   await page.locator(".form_input").first().click();
//   await page.keyboard.press("Shift+KeyA");
//   await page.keyboard.press("Backspace");
//   await page.keyboard.down("KeyA");
// });

test("test", async ({ page }) => {
  await page.goto("https://keycode.info");
  await page.keyboard.press("A");
  await page.screenshot({ path: "A.png" });
  await page.keyboard.press("ArrowLeft");
  await page.screenshot({ path: "ArrowLeft.png" });
  await page.keyboard.press("Shift+O");
  await page.screenshot({ path: "O.png" });
});
