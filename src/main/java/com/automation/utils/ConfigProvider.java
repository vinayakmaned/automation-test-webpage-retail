package com.automation.utils;

import java.io.FileInputStream;
import java.util.Properties;

/**
 * ConfigProvider
 */
public class ConfigProvider {

    public static Properties Config;

    public  void LoadConfig()
    {
        try {
            /************ File properties configuration ***************/
            Config = new Properties();
            Config.load(new FileInputStream("src/main/resources/Config.properties"));

            /*********** End configuration properties file **************/
        }
        catch (Exception ex)
        {
            System.out.println("error loading config.");
        }

    }

    public String getConfiguration(String configuration)
    {
        if(Config == null) LoadConfig();
        return Config.getProperty(configuration,"");
    }

    public void SetConfiguration(String configuration, String value)
    {
        if(Config == null) LoadConfig();
        Config.setProperty(configuration,value);
    }
}