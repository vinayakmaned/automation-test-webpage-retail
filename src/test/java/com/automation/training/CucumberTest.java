package com.automation.training;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(strict = false, features = "src/test/java/com/automation/resources/features", glue = "com.automation.training.steps", tags = {
        "@cuketest" }, plugin = {"io.qameta.allure.cucumber4jvm.AllureCucumber4Jvm", "pretty", "html:target/cucumber-htmlreport","json:target/cucumber-report.json" })
/**
 * CucumberTest
 */
public class CucumberTest {

    
}