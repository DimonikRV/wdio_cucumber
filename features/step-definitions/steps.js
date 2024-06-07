import { Given, When, Then } from "@cucumber/cucumber";
import loginPage from "../pageobjects/login.page";
import securePage from "../pageobjects/secure.page";

Given(/^User is located on the main page of (.*) website$/, async (path) => {
  await loginPage.open(path);
});

When(/^User click on the Login button$/, async () => {
  await loginPage.login();
});

Then(/^User should see the (.*) error message$/, async (message) => {
  await expect(securePage.flashAlert).toBeExisting();
  await expect(securePage.flashAlert).toHaveText(
    expect.stringContaining(message)
  );
});
