// @ts-check
import { test, expect } from '@playwright/test'

const LH_URL = 'http://localhost:5173/'

test('shows fact and img', async ({ page }) => {
  await page.goto(LH_URL)

  const textCont = await page.getByRole('paragraph').textContent()
  const image = await page.getByRole('img').getAttribute('src')

  // Expect a title "to contain" a substring.
  await expect(textCont).not.toBeNull()
  await expect(image).not.toBe('')
})
