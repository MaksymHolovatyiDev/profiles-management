import {test, expect} from '@playwright/test';
import {Routes, SignUpUser, baseUrl} from 'E2E/environment';

const mainUrl = baseUrl + Routes.SignUp;

test.describe('feature Sign un', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(mainUrl);
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });
    test('Title Validation', async ({page}) => {
      await expect(page).toHaveURL(mainUrl);
      await expect(page).toHaveTitle(/Profiles management/);
      await expect(page.getByText(/Create your account/)).toBeVisible();
    });
    test('Username Text Field Editable', async ({page}) => {
      const email = page.locator('#Username');
      await expect(email).toBeEditable();
    });
    test('Email Text Field Editable', async ({page}) => {
      const email = page.locator('#UserEmail');
      await expect(email).toBeEditable();
    });
    test('Password Text Field Editable', async ({page}) => {
      const password = page.locator('#UserPassword');
      await expect(password).toBeEditable();
    });
    test('Admin Checkbox Clickable', async ({page}) => {
      const checkbox = page.locator('#isAdmin');
      await expect(checkbox).not.toBeChecked();
      page.getByText('is admin').click();
      await expect(checkbox).toBeChecked();
    });
    test('Remember me Checkbox Clickable', async ({page}) => {
      const checkbox = page.locator('#rememberMe');
      await expect(checkbox).not.toBeChecked();
      page.getByText('remember me').click();
      await expect(checkbox).toBeChecked();
    });

  test('SignUp Button', async ({page}) => {
    await expect(page).toHaveURL(mainUrl);
    await page.fill('#Username', SignUpUser.name);
    await page.fill('#UserEmail', SignUpUser.login);
    await page.fill('#UserPassword', SignUpUser.password);
    await page.getByText('is admin').click();
    await page.getByText('remember me').click();
    await page.getByRole('button', {name: 'Sign Up'}).click();
    await page.waitForURL(baseUrl);
    await expect(page).toHaveURL(baseUrl);
    await expect(page.getByText(/Profiles:/)).toBeVisible();
  });

  test('Sign In Link', async ({page}) => {
    await expect(page).toHaveURL(mainUrl);
    await page.getByRole('link', {name: 'Sign In'}).click();
    await expect(page).toHaveURL(baseUrl + Routes.SignIn);
  });
});
