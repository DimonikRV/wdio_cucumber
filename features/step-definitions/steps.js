const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


// Given(/^I am on the (\w+) page$/, async (page) => {
//     await LoginPage.open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });


Given(/^User is located on the main page of {.*} website$/, async (path) => {
    await LoginPage.open(path)
});

When(/^User click on the {.*} button$/, async(buttonname) => {
    await LoginPage.btnSubmit.login()
	await expect (LoginPage.btnSubmit).toHaveText(
        expect.stringContaining(buttonname));
        
});

Then(/^Then User should see {.*} error message$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
	await expect (SecurePage.flashAlert).toHaveText(
        expect.stringContaining(message));
});


