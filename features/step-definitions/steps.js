import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pageobjects/login.page"
import SecurePage from "../pageobjects/secure.page"


Given(/^User is located on the main page of (.*) website$/, async (path) => {
  await LoginPage.open(path);
});

When(/^User click on the Login button$/, async () => {
  await LoginPage.login();
});

Then(/^Then User should see (.*) error message$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(
    expect.stringContaining(message)
  );
});
