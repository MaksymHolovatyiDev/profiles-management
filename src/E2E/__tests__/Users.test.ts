import {test, expect} from '@playwright/test';
import {
  Routes,
  SignInAdmin,
  SignUpUser,
  baseUrl,
  profile,
} from 'E2E/environment';

test.describe('feature Users page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(baseUrl + Routes.SignIn);
    await page.waitForURL(baseUrl + Routes.SignIn);

    await page.fill('#UserEmail', SignInAdmin.login);
    await page.fill('#UserPassword', SignInAdmin.password);
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.waitForURL(baseUrl);
    await page.getByRole('link', {name: 'Users'}).click();
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });
  test('Title Validation', async ({page}) => {
    await expect(page).toHaveTitle(/Profiles management/);
  });
  test('Users page', async ({page}) => {
    await expect(page.getByText('Users:')).toBeVisible();

    await expect(page.getByText(SignUpUser.login, {exact: true})).toBeVisible();
  });
});

test.describe('feature Users actions', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(baseUrl + Routes.SignIn);
    await page.waitForURL(baseUrl + Routes.SignIn);

    await page.fill('#UserEmail', SignInAdmin.login);
    await page.fill('#UserPassword', SignInAdmin.password);
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.waitForURL(baseUrl);
    await page.getByRole('link', {name: 'Users'}).click();
    await page.getByText(SignUpUser.login, {exact: true}).click();
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });
  test('Title Validation', async ({page}) => {
    await expect(page).toHaveTitle(/Profiles management/);
  });
  test('Picked user page', async ({page}) => {
    await expect(page.getByText(SignUpUser.name)).toBeVisible();
    await expect(page.getByText(SignUpUser.login)).toBeVisible();
    await expect(page.getByText('admin')).toBeVisible();
    await expect(page.getByText('Profiles:')).toBeVisible();
  });
  test('Create user profile', async ({page}) => {
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
    await expect(page.getByText(profile.city, {exact: true})).toBeVisible();
    await expect(page.getByText(profile.birthdate)).toBeVisible();
  });
  test('Delete user profile', async ({page}) => {
    const button = page.getByRole('button', {name: 'delete'});
    await button.hover();
    await button.click();

    await expect(page.getByText(profile.name, {exact: true})).not.toBeVisible();
    await expect(page.getByText(profile.gender)).not.toBeVisible();
    await expect(page.getByText(profile.city, {exact: true})).not.toBeVisible();
    await expect(page.getByText(profile.birthdate)).not.toBeVisible();
  });
  test('Change user profile', async ({page}) => {
    const newName = 'qwer';
    await page.getByRole('button').nth(1).click();
    expect(page.getByLabel('user name:')).toBeVisible();
    await page.getByLabel('user name:').fill(newName);
    await page.locator('form').getByText('user', {exact: true}).click();
    await page.locator('form').getByRole('button').first().click();
    await expect(page.getByLabel('user name:')).not.toBeVisible();
    await expect(page.getByText(newName)).toBeVisible();
    await expect(page.getByText('user', {exact: true})).toBeVisible();
  });
  test('Delete user', async ({page}) => {
    await expect(page).toHaveURL(baseUrl);
    await page.getByRole('button').nth(2).click();
    await page.waitForURL(baseUrl + Routes.Users);
    await expect(page).toHaveURL(baseUrl + Routes.Users);
    await expect(page.getByText('Users:')).toBeVisible();
    await expect(
      page.getByText(SignUpUser.login, {exact: true}),
    ).not.toBeVisible();
  });
});
