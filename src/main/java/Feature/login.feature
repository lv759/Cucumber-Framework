Feature: Login Test Case for OrangeHRM 

Scenario Outline: Enter correct username and password 
	Given browser is open 
	And Orange URL is open 
	Then Enter <username> and <password> 
	And click on login button
	Then opens home page 
	
	Examples: 
		|username | password |
		|Admin|admin123|
		|Admin|admin123|