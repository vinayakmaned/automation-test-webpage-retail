@cuketest
Feature: Create a new account for a user

  Scenario: New user creation

    Given I am on MyStoreHome Page
      | PageURL                                                  |
      | http://automationpractice.com/index.php                  |
    When I click on Sign In Button
    And I enter "autouser1@automation.com" as my email Address
    And I click on Create Button
    And I select a Title Button
    And I enter my personal information
      | FName  | LName | Pwd            | F1Name    | L1Name|Company|Address     |City   |Zip     |Mobile     |Ref|
      | Vin    | Man   | 123456         | Vina     | Man    | aaa   |2 Homefield |Croydo |87878   |07984479977|man|
    And I select a state from dropdown
    And I click on Register Button
