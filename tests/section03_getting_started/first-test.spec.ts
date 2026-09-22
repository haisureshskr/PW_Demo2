import { test, expect } from '@playwright/test'

test("Load Home Page", async ({ page }) => {
    await page.goto("https://qa-cart.com/demoshop/")
    await expect(page).toHaveTitle(
        "QA TEST AUTOMATION DEMO STORE BY ANURADHA AGARWAL")
    await page.getByRole('button', { name: 'Add to cart: “Assorted Coffee”' }).click();
    //await page.locator(".add-to-cart").click();
    //await page.locator(".product-item").first().click();
    //await expect(page.locator(".cart-count")).toHaveText("1");
    await page.getByRole('link', { name: 'View Shopping Cart, 1 items' }).click();
    await expect(page.getByRole('link', { name: 'View Shopping Cart, 1 items' })).toHaveText("1 items");
    console.log("Test Passed")

})