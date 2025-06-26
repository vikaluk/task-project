import { test, expect } from '@playwright/test';

test('search filters tracks by name', async ({ page }) => {
  await page.goto('/');

  await page.locator('.MuiInputBase-input.MuiOutlinedInput-input.css-1pk1fka').fill('sum');
  const container = page.locator('.MuiBox-root.css-3u751r');
  await expect(container).toHaveCount(1);
  const grid = container.locator('> .MuiGrid-root.MuiGrid-container.css-adtkzx');
  await expect(grid).toHaveCount(1);
  const trackTitle = grid.locator('.css-3ffyn9', { hasText: 'Summer Breeze' });
  await expect(trackTitle).toHaveText('Summer Breeze');
});

test('add track using plus button adds to playlist', async ({ page }) => {
  await page.goto('/');

  const summerBreezeGrid = page.locator('.MuiGrid-root.MuiGrid-container.css-adtkzx', {
    has: page.locator('.MuiTypography-root.MuiTypography-body1.css-3ffyn9', { hasText: 'Summer Breeze' }),
  });

  await summerBreezeGrid.locator('button.MuiButtonBase-root.MuiButton-root.css-hktlod').click();
  const playlist = page.locator('#playlist');
  await expect(playlist.locator('.MuiTypography-root.MuiTypography-body1.css-3ffyn9', { hasText: 'Summer Breeze' })).toBeVisible();
});

test('playlist total duration is accurate in seconds', async ({ page }) => {
  await page.goto('/');

  const summerBreezeGrid = page.locator('.MuiGrid-root.MuiGrid-container.css-adtkzx', {
    has: page.locator('.MuiTypography-root.MuiTypography-body1.css-3ffyn9', { hasText: 'Summer Breeze' }),
  });
  await summerBreezeGrid.locator('button.MuiButtonBase-root.MuiButton-root.css-hktlod').click();

  const expectedTotalSeconds = 3 * 60 + 35;
  const totalDuration = page.locator('#playlist-duration');
  await expect(totalDuration).toHaveText(expectedTotalSeconds.toString());
});

