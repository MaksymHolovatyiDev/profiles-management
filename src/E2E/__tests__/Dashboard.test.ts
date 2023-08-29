import {test, expect} from '@playwright/test';
import {Routes, SignInAdmin, baseUrl} from 'E2E/environment';

test.describe('feature Dashboard', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(baseUrl + Routes.SignIn);
    await page.waitForURL(baseUrl + Routes.SignIn);

    await page.fill('#UserEmail', SignInAdmin.login);
    await page.fill('#UserPassword', SignInAdmin.password);
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.waitForURL(baseUrl);
    await page.getByRole('link', {name: 'DashBoard'}).click();
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });
  test('Title Validation', async ({page}) => {
    await expect(page).toHaveTitle(/Profiles management/);
  });
  test('Dashboard page', async ({page}) => {
    await expect(page.getByText('Dashboard:')).toBeVisible();
    await expect(page.getByText('Users:')).toBeVisible();
    await expect(page.getByText('Profiles:')).toBeVisible();
    await expect(page.getByText('Profiles over 18 years old:')).toBeVisible();
  });
});
