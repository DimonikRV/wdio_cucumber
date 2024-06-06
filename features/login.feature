Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I should see the error message, when the Username field in the login form is empty
    Given User is located on the main page of <website> website
    When User click on the Login button
    Then Then User should see <message> error message

    Examples:
      | website                   | message                            |
      | https://www.saucedemo.com | Epic sadface: Username is required |
