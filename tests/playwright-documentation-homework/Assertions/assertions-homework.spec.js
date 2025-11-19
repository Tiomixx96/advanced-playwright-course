import { test, expect } from "@playwright/test";
import { exitCode } from "process";

test("checking that checkbox is checked", async ({ page }) => {
  await page.goto("https://ek.ua/ua/list/298/");
  let locator = page.locator("label").filter({ hasText: "Acer" });
  await locator.check();
  await expect(locator).toBeChecked();
});

test("checking that 8gb RAM is disabled after choosing 24GB GPU", async ({
  page,
}) => {
  await page.goto("https://ek.ua/ua/list/298/");
  await page.locator("#preset4708 label").filter({ hasText: "24 ГБ" }).check();
  await expect(
    page.locator("#preset4708 label").filter({ hasText: "24 ГБ" })
  ).toBeChecked();
  await expect(page.locator("#c2843")).toBeDisabled();
});

test("Search is empty", async ({ page }) => {
  await page.goto("https://ek.ua/ua/list/298/");
  await expect(page.locator("#ek-search")).toBeEmpty();
});

test("toBeEnabled element", async ({ page }) => {
  await page.goto("https://ek.ua/ua/");
  await expect(
    page.locator("#ek-search-form > div.header_search_btn-submit > button")
  ).toBeEnabled();
});

test("toBeFocused on the search line", async ({ page }) => {
  await page.goto("https://ek.ua/ua/");
  await page.locator("#ek-search").click();
  await expect(page.locator("#ek-search")).toBeFocused();
});

test("toBeInViewport scroll to footer and check it", async ({ page }) => {
  await page.goto("https://ek.ua/ua/");
  const footer = page.locator("footer");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(footer).toBeInViewport();
});

test("toContainClass ", async ({ page }) => {
  await page.goto("https://ek.ua/ua/");
  let locator = page.locator("#bar_bm_compared");
  await expect(locator).toContainClass("goods-bar-section");
  await expect(locator).toContainClass("section-disabled");
});

test("toContainText ", async ({ page }) => {
  await page.goto("https://ek.ua/ua/k300.htm");
  let locator = page.locator(".mainmenu-list").locator("li");
  //   Тут вказуємо по порядку, можна не всі елементи
  await expect(locator).toContainText([
    "Гаджети",
    "Комп'ютери",
    "Фото",
    "TV",
    "Аудіо",
  ]);
});

test("toHaveClass ", async ({ page }) => {
  await page.goto("https://ek.ua/ua/list/267/");
  let locator = page.locator(".catalog-path").first();

  await expect(locator).toHaveClass("catalog-path catalog-path-top s-width");
  // OR
  await expect(locator).toHaveClass([
    "catalog-path",
    "catalog-path-top",
    "s-width",
  ]);
});
