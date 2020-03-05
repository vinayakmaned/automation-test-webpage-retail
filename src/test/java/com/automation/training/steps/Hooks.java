package com.automation.training.steps;

import com.automation.utils.DriverProvider;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.AfterStep;
import io.cucumber.core.api.Scenario;

public class Hooks {
    WebDriver driver;
    Scenario scenario;

    @Before
    public void getDriver(Scenario scenario) throws Throwable {
        this.driver = DriverProvider.getBrowser();
        this.scenario = scenario;
    }

    @After
    public void closeDriver() throws Throwable {
        DriverProvider.closeDriver();
    }
    @AfterStep
    public void DoSomething() throws Throwable {
        if (scenario.isFailed()) {
        byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshot, "image/png");
       }
    }

}