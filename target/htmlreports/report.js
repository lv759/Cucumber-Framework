$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Feature/login.feature");
formatter.feature({
  "name": "Login Test Case for OrangeHRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Enter correct username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "Orange URL is open",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "opens home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enter correct username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Orange URL is open",
  "keyword": "And "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.orange_URL_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Admin and admin123",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opens home page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.opens_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter correct username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Orange URL is open",
  "keyword": "And "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.orange_URL_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Admin and admin123",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opens home page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRunner.LoginPageDemo_POM.opens_home_page()"
});
formatter.result({
  "status": "passed"
});
});