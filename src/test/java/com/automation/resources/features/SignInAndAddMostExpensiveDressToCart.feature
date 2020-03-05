@cuketest
Feature: Sign in as a registered user

  Scenario: User Sign in to My store

    Given I am on MyStoreHome Page
      | PageURL                                                  |
      | http://automationpractice.com/index.php                  |
    When I click on Sign In Button
    And I enter "autouser1@automation.com" as my sign in email Address
    And I enter "123456" as my password
    And I click on Login Button
    And I click on Dresses Tab
    And I add the Expensive Dress to cart

