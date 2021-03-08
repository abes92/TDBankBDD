$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/home.feature");
formatter.feature({
  "name": "testing TD bank functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "search box functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user in td bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_in_td_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click search bar",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_click_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "he will be able to write down",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.he_will_be_able_to_write_down()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@class\u003d\u0027td-search-input ng-valid ng-dirty ng-valid-parse ng-touched ng-empty\u0027]\"}\n  (Session info: chrome\u003d88.0.4324.192)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Abess-MBP\u0027, ip: \u0027192.168.1.231\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.192, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/59/g07ll2p95q5...}, goog:chromeOptions: {debuggerAddress: localhost:54132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b5f7dd2810c96e4776e18ae316180b6d\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027td-search-input ng-valid ng-dirty ng-valid-parse ng-touched ng-empty\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat common.webAPI.GeneralXPath(webAPI.java:264)\n\tat stepDefinitions.homePageStepDefinition.he_will_be_able_to_write_down(homePageStepDefinition.java:55)\n\tat ✽.he will be able to write down(file:///Users/abestaieb/2021_PreparationBDD/TDBank/src/test/java/features/home.feature:7)\n",
  "status": "failed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user verify is directing to the right page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_verify_is_directing_to_the_right_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Abess-MBP\u0027, ip: \u0027192.168.1.231\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002714.0.1\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat stepDefinitions.homePageStepDefinition.tearDown(homePageStepDefinition.java:34)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "sign in functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in td bank home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user click sign in option",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \"\u003cuserName\u003e\" and \"\u003cpassWord\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user try to log in to account",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord"
      ]
    },
    {
      "cells": [
        "abes92",
        "123ase"
      ]
    },
    {
      "cells": [
        "abes90",
        "1234qwe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "sign in functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user in td bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_in_td_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click sign in option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_click_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"abes92\" and \"123ase\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user try to log in to account",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_try_to_log_in_to_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "sign in functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user in td bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_in_td_bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click sign in option",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_click_sign_in_option()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"abes90\" and \"1234qwe\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user try to log in to account",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.homePageStepDefinition.user_try_to_log_in_to_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});