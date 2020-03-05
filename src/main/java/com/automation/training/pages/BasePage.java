package com.automation.training.pages;

import com.automation.utils.ConfigProvider;
import com.automation.utils.DriverProvider;

import org.openqa.selenium.WebDriver;



public class BasePage {

    protected WebDriver driver;
    protected ConfigProvider config;

    public BasePage() {
        this.driver = DriverProvider.getBrowser();
        this.config = new ConfigProvider();
    }
}
