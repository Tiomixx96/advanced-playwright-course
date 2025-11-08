import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/");
  // Shift + click
  await page.getByText("Item").click({ modifiers: ["Shift"] });

  // Ctrl + click on Windows and Linux
  // Meta + click on macOS
  await page.getByText("Item").click({ modifiers: ["ControlOrMeta"] });

  // Hover over element
  await page.getByText("Item").hover();

  // Click the top left corner
  await page.getByText("Item").click({ position: { x: 0, y: 0 } });
});
