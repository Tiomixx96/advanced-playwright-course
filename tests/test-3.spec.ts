import { test, expect } from "@playwright/test";

test("search the car in Kharkiv", async ({ page }) => {
  await page.goto("https://www.olx.ua/uk/");
  await page.getByTestId("cat-1532").click();
  await page.getByRole("link", { name: "Легкові автомобілі" }).click();
  await page.getByTestId("location-search-input").click();
  await page.getByTestId("regions-list").getByText("Київська область").click();
  await page.getByTestId("cities-back-button").click();
  await page
    .getByTestId("regions-list")
    .getByText("Харківська область")
    .click();
  await page.getByText("Харківська областьВся область").click();
  await page.getByText("$").click();
  await page.locator("div:nth-child(8) > div > .css-t0lbh8 > div").click();
  await page.getByRole("checkbox", { name: "Автоматична" }).check();
  await page
    .locator("div")
    .filter({ hasText: /^Коробка передач$/ })
    .click();
  await page
    .locator("a")
    .filter({ hasText: "Audi A7 Sportback 3.0 Quattro" })
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
    .getByRole("group", { name: "4 / 24", exact: true })
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
    .locator(
      ".swiper-slide.swiper-slide-active > .swiper-zoom-container > .css-1bmvjcs"
    )
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
