import {test, expect} from '@playwright/test';
import {Routes, SignInAdmin, SignInUser, baseUrl} from 'E2E/environment';

test.describe('Admin header', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(baseUrl + Routes.SignIn);
    await page.waitForURL(baseUrl + Routes.SignIn);

    await page.fill('#UserEmail', SignInAdmin.login);
    await page.fill('#UserPassword', SignInAdmin.password);
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.waitForURL(baseUrl);
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });
  test('Title Validation', async ({page}) => {
    await expect(page).toHaveTitle(/Profiles management/);
  });
  test('Profiles navigation', async ({page}) => {
    expect(page.getByRole('link', {name: 'Profiles'})).toBeVisible();
    await page.getByRole('link', {name: 'Profiles'}).click();
    await expect(page.getByText('Profiles:')).toBeVisible();
  });
  test('Dashboard navigation', async ({page}) => {
    expect(page.getByRole('link', {name: 'DashBoard'})).toBeVisible();
    await page.getByRole('link', {name: 'DashBoard'}).click();
    await expect(page.getByText('Dashboard:')).toBeVisible();
  });
  test('Users navigation', async ({page}) => {
    expect(page.getByRole('link', {name: 'Users'})).toBeVisible();
    await page.getByRole('link', {name: 'Users'}).click();
    await expect(page.getByText('Users:')).toBeVisible();
  });
  test('Log out', async ({page}) => {
    await page.getByRole('button', {name: 'Log out'}).click();
    await expect(page.getByText(/Sign in/)).toBeVisible();
  });
  test('Theme checkbox', async ({page}) => {
    const checkbox = page.locator('label');
    expect(checkbox).toBeChecked();
    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  });
});

test.describe('User header', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(baseUrl + Routes.SignIn);
    await page.waitForURL(baseUrl + Routes.SignIn);

    await page.fill('#UserEmail', SignInUser.login);
    await page.fill('#UserPassword', SignInUser.password);
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.waitForURL(baseUrl);
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });
  test('Title Validation', async ({page}) => {
    await expect(page).toHaveTitle(/Profiles management/);
    await expect(page.getByText('Profiles:')).toBeVisible();
  });
  test('Profiles navigation', async ({page}) => {
    await expect(page.getByRole('link', {name: 'Profiles'})).not.toBeVisible();
  });
  test('Dashboard navigation', async ({page}) => {
    await expect(page.getByRole('link', {name: 'DashBoard'})).not.toBeVisible();
  });
  test('Users navigation', async ({page}) => {
    await expect(page.getByRole('link', {name: 'Users'})).not.toBeVisible();
  });
  test('Log out', async ({page}) => {
    await page.getByRole('button', {name: 'Log out'}).click();
    await expect(page.getByText(/Sign in/)).toBeVisible();
  });
  test('Theme checkbox', async ({page}) => {
    const checkbox = page.locator('label');
    expect(checkbox).toBeChecked();
    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  });
});
