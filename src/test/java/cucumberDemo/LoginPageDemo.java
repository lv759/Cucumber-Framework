package cucumberDemo;
/*package cucumberDemo;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class LoginPageDemo {

	WebDriver driver=null;
	@Given("browser is open")
	public void browser_is_open() {
	   
		System.setProperty("webdriver.chrome.driver", "C:/Users/VISH/Downloads/chromedriver_win32 (1)/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().fullscreen();
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	
	}

	@And("Orange URL is open")
	public void orange_URL_is_open() {
	   driver.get("https://opensource-demo.orangehrmlive.com/");
	}

	@Then("^Enter (.*) and (.*)$")
	public void enter_username_and_password(String username,String password) {
		driver.findElement(By.id("txtUsername")).sendKeys(username);
		driver.findElement(By.id("txtPassword")).sendKeys(password);
		
	}

	@And("click on login button")
	public void click_on_login_button() {
		driver.findElement(By.id("btnLogin")).click();
	}

	@Then("opens home page")
	public void opens_home_page() {
	    driver.getPageSource().contains("OrangeHRM");
	}


}
*/