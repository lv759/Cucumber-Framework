package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

	public static WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
	}
	
	By usern = By.id("txtUsername");
	By passwd = By.id("txtPassword");
	By loginbtn = By.id("btnLogin");

	public void Username_m(String username) {
		driver.findElement(usern).sendKeys(username);
		
			}
	public void passw_m(String password) {
		
		driver.findElement(passwd).sendKeys(password);
	
			}
	public void clickUser() {

driver.findElement(loginbtn).click();
	}

}
