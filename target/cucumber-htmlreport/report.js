$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/automation/resources/features/CreateNewAccount.feature");
formatter.feature({
  "name": "Create a new account for a user",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cuketest"
    }
  ]
});
formatter.scenario({
  "name": "New user creation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cuketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on MyStoreHome Page",
  "rows": [
    {
      "cells": [
        "PageURL"
      ]
    },
    {
      "cells": [
        "http://automationpractice.com/index.php"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationSteps.i_am_on_MyStoreHome_Page(DataTable)"
});
formatter.write("Loaded Page : http://automationpractice.com/index.php");
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign In Button",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Sign_In_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"autouser1@automation.com\" as my email Address",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_email_Address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Create Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Create_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I select a Title Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_select_a_Title_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter my personal information",
  "rows": [
    {
      "cells": [
        "FName",
        "LName",
        "Pwd",
        "F1Name",
        "L1Name",
        "Company",
        "Address",
        "City",
        "Zip",
        "Mobile",
        "Ref"
      ]
    },
    {
      "cells": [
        "Vin",
        "Man",
        "123456",
        "Vina",
        "Man",
        "aaa",
        "2 Homefield",
        "Croydo",
        "87878",
        "07984479977",
        "man"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_my_personal_information(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I select a state from dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_select_a_state_from_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Register Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Register_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/com/automation/resources/features/LogoutAndLoginBack.feature");
formatter.feature({
  "name": "Sign in as a registered user and logout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cuketest"
    }
  ]
});
formatter.scenario({
  "name": "User Sign in to My store and logs out after verifying the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cuketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on MyStoreHome Page",
  "rows": [
    {
      "cells": [
        "PageURL"
      ]
    },
    {
      "cells": [
        "http://automationpractice.com/index.php"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationSteps.i_am_on_MyStoreHome_Page(DataTable)"
});
formatter.write("Loaded Page : http://automationpractice.com/index.php");
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign In Button",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Sign_In_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"autouser1@automation.com\" as my sign in email Address",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_sign_in_email_Address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"123456\" as my password",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Dresses Tab",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Dresses_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign Out Button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iClickOnSignOutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Sign_In_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"autouser1@automation.com\" as my sign in email Address",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_sign_in_email_Address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"123456\" as my password",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on View shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.iClickOnViewShoppingCart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/com/automation/resources/features/SignInAndAddMostExpensiveDressToCart.feature");
formatter.feature({
  "name": "Sign in as a registered user",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@cuketest"
    }
  ]
});
formatter.scenario({
  "name": "User Sign in to My store",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cuketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on MyStoreHome Page",
  "rows": [
    {
      "cells": [
        "PageURL"
      ]
    },
    {
      "cells": [
        "http://automationpractice.com/index.php"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationSteps.i_am_on_MyStoreHome_Page(DataTable)"
});
formatter.write("Loaded Page : http://automationpractice.com/index.php");
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Sign In Button",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Sign_In_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"autouser1@automation.com\" as my sign in email Address",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_sign_in_email_Address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"123456\" as my password",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on Dresses Tab",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Dresses_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I add the Expensive Dress to cart",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_add_the_Expensive_Dress_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});