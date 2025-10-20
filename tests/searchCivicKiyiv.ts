import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.olx.ua/uk/");
  await page.getByTestId("cat-1532").click();
  await page.getByRole("link", { name: "Легкові автомобілі" }).click();
  await page.getByTestId("search-input").click();
  await page.getByTestId("search-input").fill("honda civic");
  await page.getByTestId("search-input").press("Enter");
  await page.getByText("$").click();
  await page.getByTestId("sorting-icon").click();
  await page.getByText("Найновіші").click();
  await page.getByTestId("location-search-input").click();
  await page.getByTestId("location-search-input").fill("киї");
  await page.getByTestId("suggestion-item").first().click();
  await page.locator("div:nth-child(9) > div > .css-t0lbh8 > div").click();
  await page.getByRole("checkbox", { name: "Автоматична" }).check();
  await page
    .locator("div")
    .filter({ hasText: "Ми знайшли 44 оголошення" })
    .nth(4)
    .click();
  await page.locator("a").filter({ hasText: "Honda Civic 2019" }).click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "previous" })
    .click();
  await page
    .getByRole("group", { name: "3 / 11" })
    .getByTestId("swiper-image-lazy")
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page
    .getByTestId("image-galery-container")
    .getByRole("button", { name: "next" })
    .click();
  await page.locator(".css-e38e2m").click();
});
