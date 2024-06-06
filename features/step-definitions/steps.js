const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

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
