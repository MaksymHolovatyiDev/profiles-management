import {test, expect} from '@playwright/test';
import {Routes, SignInAdmin, baseUrl, profile} from 'E2E/environment';

test.describe('feature Sign in', () => {
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
    await expect(page).toHaveURL(baseUrl);
    await expect(page).toHaveTitle(/Profiles management/);
    await expect(page.getByText(/Profiles:/)).toBeVisible();
  });
  test('Create profile', async ({page}) => {
    await page
      .locator('li')
      .filter({hasText: 'Create new profile'})
      .getByRole('button')
      .click();
    await page.getByLabel('name:').fill(profile.name);
    await page.getByText(profile.gender).click();
    await page.getByLabel('birthdate:').fill(profile.birthdate);
    await page.getByLabel('city:').fill(profile.city);
    await page.getByLabel('city:').press('Enter');

    await expect(page.getByText(profile.name, {exact: true})).toBeVisible();
    await expect(page.getByText(profile.gender)).toBeVisible();
    await expect(page.getByText(profile.city)).toBeVisible();
    await expect(page.getByText(profile.birthdate)).toBeVisible();
  });
  test('Delete profile', async ({page}) => {
    const button = page.getByRole('button', {name: 'delete'});
    await button.hover();
    await button.click();

    await expect(page.getByText(profile.name, {exact: true})).not.toBeVisible();
    await expect(page.getByText(profile.gender)).not.toBeVisible();
    await expect(page.getByText(profile.city)).not.toBeVisible();
    await expect(page.getByText(profile.birthdate)).not.toBeVisible();
  });
});
