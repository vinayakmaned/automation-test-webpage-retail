package com.automation.utils;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

/**
 * DriverProvider
 */
public class DriverProvider {
    private static Map<String, WebDriver> drivers = new HashMap<String, WebDriver>();
    public static ConfigProvider configProvider = new ConfigProvider();
    static String browserlocation = configProvider.getConfiguration("browser.location");

    public static WebDriver getBrowser()  {

        WebDriver driver = null;
        String browserName = configProvider.getConfiguration("browser.name");
        if (browserName.equals("Firefox")) {
            driver = drivers.get("Firefox");
            if (driver == null) {
                driver = new FirefoxDriver();
                drivers.put("Firefox", driver);
            }

        } else if (browserName.equals("IE")) {
            driver = drivers.get("IE");
            if (driver == null) {
                System.setProperty("webdriver.ie.driver", browserlocation);
                driver = new InternetExplorerDriver();
                drivers.put("IE", driver);

            }

        } else if (browserName.equals("Chrome")) {
            driver = drivers.get("Chrome");
            if (driver == null) {
                System.setProperty("webdriver.chrome.driver", browserlocation);
                driver = new ChromeDriver();
                drivers.put("Chrome", driver);
            }

        }
        else {
            System.out.println("Invalid Driver configuration. Check your config file.");
        }
        return driver;
    }

    public static void closeDriver() {
        for (String key : drivers.keySet()) {
            drivers.get(key).close();
            drivers.get(key).quit();
            drivers.remove(key);
        }
    }
    
}