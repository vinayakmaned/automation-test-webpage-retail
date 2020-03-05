package com.automation.utils;

import com.automation.training.pages.BasePage;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;


public class browserUtils extends BasePage {

    public byte[] takeScreenshot() {
        byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
        return screenshot;
    }
}