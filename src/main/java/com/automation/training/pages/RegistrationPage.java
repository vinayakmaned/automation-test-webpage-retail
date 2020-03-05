package com.automation.training.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class RegistrationPage extends BasePage {
	public RegistrationPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.ID, using = "email_create")
	private static WebElement emailcreate;
	@FindBy(how = How.ID, using = "email")
	private static WebElement emailsignin;
	@FindBy(how = How.ID, using = "passwd")
	private static WebElement password;
	@FindBy(how = How.ID, using = "phone_mobile")
	private static WebElement mobile;
	@FindBy(how = How.ID, using = "customer_firstname")
	private static WebElement fname;
	@FindBy(how = How.ID, using = "customer_lastname")
	private static WebElement lname;
	@FindBy(how = How.ID, using = "email")
	private static WebElement email;
	@FindBy(how = How.ID, using = "passwd")
	private static WebElement pwd;
	@FindBy(how = How.ID, using = "firstname")
	private static WebElement f1name;
	@FindBy(how = How.ID, using = "lastname")
	private static WebElement l1name;
	@FindBy(how = How.ID, using = "company")
	private static WebElement company;
	@FindBy(how = How.ID, using = "address1")
	private static WebElement address;
	@FindBy(how = How.ID, using = "city")
	private static WebElement city;
	@FindBy(how = How.ID, using = "postcode")
	private static WebElement zip;
	@FindBy(how = How.ID, using = "alias")
	private static WebElement ref;
	@FindBy(how = How.ID, using = "uniform-id_state")
	private static WebElement state;
	@FindBy(how = How.ID, using = "uniform-id_country")
	private static WebElement country;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[2]/div/div[3]/div/div/form/div[1]/div[1]/div[1]/label/div")
	private static WebElement titlebutton;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[2]/div/div[3]/div/div/form/div[4]/button/span")
	private static WebElement registerbutton;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[2]/div/div[3]/div/div/div[1]/form/div/div[3]/button/span")
	private static WebElement createbutton;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a")
	private static WebElement signinbutton;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[2]/div/div[3]/div/div/div[2]/form/div/p[2]/button/span")
	private static WebElement loginbutton;
	@FindBy(how = How.XPATH, using = "./html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[2]/a")
	private static WebElement dressesbutton;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img")
	private static WebElement dressviewbutton;


//	@FindBy(how = How.XPATH, using = "//*[contains(@class, 'exclusive added')]")
//	private static WebElement addtocartbutton;
	@FindBy(how = How.CSS, using = "#add_to_cart")
	private static WebElement addtocartbutton;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[1]/header/div[2]/div/div/nav/div[2]/a")
	private static WebElement signout;
	@FindBy(how = How.XPATH, using = "/html/body/div/div[1]/header/div[3]/div/div/div[3]/div/a")
	private static WebElement viewcart;
	@FindBy(how = How.CSS, using = "#category > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div")
	private static WebElement locIframe;




	public void navigateToRegistrationPage(String URL) {
        driver.navigate().to(URL);
	}

	public void enterPersonalDetails(String FName, String LName, String Pwd, String F1Name, String L1Name, String Company, String Address, String City, String Zip, String Mobile, String Ref) {
		fname.clear();
		fname.sendKeys(FName);
		lname.clear();
		lname.sendKeys(LName);
//		email.clear();
//		email.sendKeys(Email);
		pwd.clear();
		pwd.sendKeys(Pwd);
		f1name.clear();
		f1name.sendKeys(F1Name);
		l1name.clear();
		l1name.sendKeys(L1Name);
		company.clear();
		company.sendKeys(Company);
		address.clear();
		address.sendKeys(Address);
		city.clear();
		city.sendKeys(City);
		zip.clear();
		zip.sendKeys(Zip);
		mobile.clear();
		mobile.sendKeys(Mobile);
		ref.clear();
		ref.sendKeys(Ref);

	}

	public void clickSignIn() {
		signinbutton.click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
	}

	public void clickCreate() {
		createbutton.click();
		WebDriverWait wait = new WebDriverWait(driver, 20);
	}

	public void clickRegister() {
		registerbutton.click();
		WebDriverWait wait = new WebDriverWait(driver, 20);
	}

	public void clickLogin() throws InterruptedException {
		loginbutton.click();
		Thread.sleep(5000);
		WebDriverWait wait = new WebDriverWait(driver, 20);
	}

	public void clickDressesTab() throws InterruptedException {
		dressesbutton.click();
		Thread.sleep(10000);
	}

	public void clickAddToCart() throws InterruptedException {
		dressviewbutton.click();
		Thread.sleep(10000);
	}

	public void clickcart() throws InterruptedException {
		driver.switchTo().frame(locIframe);
		addtocartbutton.click();
		WebDriverWait wait = new WebDriverWait(driver, 20);
		Thread.sleep(10000);
	}

	public void selectState() {

		Select drpState = new Select(driver.findElement(By.id("id_state")));
		drpState.selectByVisibleText("Florida");
		WebDriverWait wait = new WebDriverWait(driver, 20);
	}

	public void clickTitle() {
		titlebutton.click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
	}

	public void EnterEmail(String mail) {
		String randomemail = mail + new Random().nextInt(1000);
		emailcreate.sendKeys(randomemail);
	}

	public void SignInEmail(String signin) throws InterruptedException {
		emailsignin.sendKeys(signin);
		Thread.sleep(5000);
	}

	public void passEnter(String key) throws InterruptedException {
		pwd.sendKeys(key);
		Thread.sleep(5000);
	}

	public void clickSignout() throws InterruptedException {
		signout.click();
		WebDriverWait wait = new WebDriverWait(driver, 20);
		Thread.sleep(10000);
	}

	public void clickViewCart() throws InterruptedException {
		viewcart.click();
		WebDriverWait wait = new WebDriverWait(driver, 20);
		Thread.sleep(10000);
	}
}
