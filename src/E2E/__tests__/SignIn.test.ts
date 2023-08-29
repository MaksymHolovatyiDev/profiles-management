import {test, expect} from '@playwright/test';
import {Routes, baseUrl, SignInAdmin} from 'E2E/environment';

const mainUrl = baseUrl + Routes.SignIn;

test.describe('feature Sign in', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(mainUrl);
  });
  test.afterEach(async ({page}) => {
    await page.close();
  });
  test("Title Validation", async ({ page }) => {
    await expect(page).toHaveURL(mainUrl);
    await expect(page).toHaveTitle(/Profiles management/);
    await expect(page.getByText(/Sign in/)).toBeVisible();
  });
  test("Email Text Field Editable", async ({ page }) => {
    const email = page.locator("#UserEmail");
    await expect(email).toBeEditable();
  });
  test("Password Text Field Editable", async ({ page }) => {
    const password = page.locator("#UserPassword");
    await expect(password).toBeEditable();
  });
    test("Checkbox Clickable", async ({ page }) => {
    const checkbox = page.locator("#rememberMe");
      await expect(checkbox).not.toBeChecked();
      page.getByText('remember me').click();
      await expect(checkbox).toBeChecked();
  });

  test('SignIn Button', async ({page}) => {
    await expect(page).toHaveURL(mainUrl);
    await page.fill('#UserEmail', SignInAdmin.login);
    await page.fill('#UserPassword', SignInAdmin.password);
    await page.getByText('remember me').click();
    await page.getByRole('button', {name: 'Sign In'}).click();
    await page.waitForURL(baseUrl);
    await expect(page).toHaveURL(baseUrl);
    await expect(page.getByText(/Profiles:/)).toBeVisible();
  });

  test("Sign Up Link", async ({ page }) => {
    await expect(page).toHaveURL(mainUrl);
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(baseUrl+Routes.SignUp);
  });
});
