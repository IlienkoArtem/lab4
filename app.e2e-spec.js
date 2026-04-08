import { test, expect } from '@playwright/test';

test('Користувач може розрахувати знижку та кешбек', async ({ page }) => {
  // 1. Відкриваємо локальну адресу, де запущено Vite
  await page.goto('http://localhost:5173/');

  // 2. Знаходимо поля і вводимо дані
  await page.fill('#priceInput', '1000');
  await page.fill('#discountInput', '15');

  // 3. Натискаємо кнопку "Розрахувати"
  await page.click('#calcBtn');

  // 4. Перевіряємо, чи з'явився правильний результат на екрані
  const finalPrice = await page.locator('#finalPrice');
  const cashback = await page.locator('#cashback');

  await expect(finalPrice).toHaveText('850.00 ₴');
  await expect(cashback).toHaveText('17.00 ₴');
});