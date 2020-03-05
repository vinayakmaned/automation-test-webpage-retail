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
  "name": "I add the Expensive Dress to cart",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_add_the_Expensive_Dress_to_cart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027AMAC02WC58AHTD6\u0027, ip: \u0027172.22.92.194\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/7d/_7xsb9p506x...}, goog:chromeOptions: {debuggerAddress: localhost:65413}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5e73a087123bf23fa0ed0ebab49564c6\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat com.automation.training.pages.RegistrationPage.clickAddToCart(RegistrationPage.java:138)\n\tat com.automation.training.steps.RegistrationSteps.i_add_the_Expensive_Dress_to_cart(RegistrationSteps.java:103)\n\tat ✽.I add the Expensive Dress to cart(file:src/test/java/com/automation/resources/features/LogoutAndLoginBack.feature:14)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on add to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_add_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Sign Out Button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iClickOnSignOutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"autouser1@automation.com\" as my sign in email Address",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_sign_in_email_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"123456\" as my password",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_enter_as_my_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I click on View shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.iClickOnViewShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded3.png", null);
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027AMAC02WC58AHTD6\u0027, ip: \u0027172.22.92.194\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: /var/folders/7d/_7xsb9p506x...}, goog:chromeOptions: {debuggerAddress: localhost:65447}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 584493e9991e612b50d667334d05a0d0\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat com.automation.training.pages.RegistrationPage.clickAddToCart(RegistrationPage.java:138)\n\tat com.automation.training.steps.RegistrationSteps.i_add_the_Expensive_Dress_to_cart(RegistrationSteps.java:103)\n\tat ✽.I add the Expensive Dress to cart(file:src/test/java/com/automation/resources/features/SignInAndAddMostExpensiveDressToCart.feature:14)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on add to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.i_click_on_add_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});