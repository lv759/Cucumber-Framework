package TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(features="C:/Users/VISH/eclipse-workspace/cucumberDemo/src/main/java/Feature/login.feature",
glue= {"TestRunner"},
monochrome=true,
plugin={"pretty","html:target/htmlreports.jason"})
public class LoginRunner {

	
	

}
