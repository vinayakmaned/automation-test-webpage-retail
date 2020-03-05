package com.automation.training.steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.core.api.Scenario;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.Before;

import java.util.List;

import com.automation.training.pages.RegistrationPage;
import com.automation.utils.browserUtils;


public class RegistrationSteps {
    RegistrationPage registrationPage;
    Scenario scenario;
    browserUtils bUtils;

    public RegistrationSteps() {
        registrationPage = new RegistrationPage();
        bUtils = new browserUtils();
    }

    @Before
    public void getScenarioInstance(Scenario scenario) throws Throwable {
        this.scenario = scenario;
    }

    @Given("I am on MyStoreHome Page")
    public void i_am_on_MyStoreHome_Page(DataTable arg1) {
        registrationPage.navigateToRegistrationPage(arg1.row(1).get(0).toString());
        scenario.write("Loaded Page : " + arg1.row(1).get(0).toString());
        scenario.embed(bUtils.takeScreenshot(), "image/png");
    }

    @When("I click on Sign In Button")
    public void i_click_on_Sign_In_Button() {
        registrationPage.clickSignIn();
    }

    @When("I enter my personal information")
    public void i_enter_my_personal_information(DataTable arg1) throws InterruptedException {
        List<List<String>> data = arg1.asLists();
        registrationPage.enterPersonalDetails(data.get(1).get(0).toString(), data.get(1).get(1).toString(),
                data.get(1).get(2).toString(), data.get(1).get(3).toString(), data.get(1).get(4).toString(), data.get(1).get(5).toString(), data.get(1).get(6).toString(), data.get(1).get(7).toString(), data.get(1).get(8).toString(), data.get(1).get(9).toString(), data.get(1).get(10).toString());
        Thread.sleep(10000);
    }

    @When("I select a state from dropdown")
    public void i_select_a_state_from_dropdown() {
        registrationPage.selectState();
    }

    @When("I click on Create Button")
    public void i_click_on_Create_Button() throws InterruptedException {
        registrationPage.clickCreate();
        Thread.sleep(5000);
    }

    @When("I click on Register Button")
    public void i_click_on_Register_Button() throws InterruptedException {
        registrationPage.clickRegister();
        Thread.sleep(5000);
    }
    @When("I select a Title Button")
    public void i_select_a_Title_Button() throws InterruptedException {
        registrationPage.clickTitle();
        Thread.sleep(5000);
    }

    @When("I enter {string} as my email Address")
    public void i_enter_as_my_email_Address(String arg1) {
        registrationPage.EnterEmail(arg1);

    }

    @When("I enter {string} as my sign in email Address")
    public void i_enter_as_my_sign_in_email_Address(String arg1) throws InterruptedException {
        registrationPage.SignInEmail(arg1);

    }

    @When("I enter {string} as my password")
    public void i_enter_as_my_password(String arg1) throws InterruptedException {
        registrationPage.passEnter(arg1);
    }

    @When("I click on Login Button")
    public void i_click_on_Login_Button() throws InterruptedException {
        registrationPage.clickLogin();
    }

    @When("I click on Dresses Tab")
    public void i_click_on_Dresses_Tab() throws InterruptedException {
    registrationPage.clickDressesTab();
    }

    @When("I add the Expensive Dress to cart")
    public void i_add_the_Expensive_Dress_to_cart() throws InterruptedException {
        registrationPage.clickAddToCart();
    }

    @When("I Click on Register Button")
    public void i_Click_on_Register_Button() throws InterruptedException {
        registrationPage.clickRegister();
    }

    @When("I click on add to the cart")
    public void i_click_on_add_to_the_cart() throws InterruptedException {
        registrationPage.clickcart();
    }

    @Then("I click on Sign Out Button")
    public void iClickOnSignOutButton() throws InterruptedException {
        registrationPage.clickSignout();
    }

    @And("I click on View shopping cart")
    public void iClickOnViewShoppingCart() throws InterruptedException {
        registrationPage.clickViewCart();
    }
}