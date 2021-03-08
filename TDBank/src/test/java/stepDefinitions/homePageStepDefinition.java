package stepDefinitions;

import Home.homePage;
import common.webAPI;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import static Home.HomePageWebElement.*;

public class homePageStepDefinition extends webAPI {
static homePage home;

    @BeforeStep
    public static void getInit(){
        home= PageFactory.initElements(driver,homePage.class);
    }
    @After
    public void tearDown(Scenario scenario) throws IOException {
        if (scenario.isFailed()) {
            // Take a screenshot...
            File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            FileHandler.copy(src, new File("/Users/abestaieb/2021_PreparationBDD/TDBank/screenShot.png"));
        }
    }
    @After
    public void closeBrowser(){
        cleanUp();
    }
    @Given("user in td bank home page")
    public void user_in_td_bank_home_page() throws IOException {
      home.openBrowser();

    }

   @When("user click search bar")
      public void user_click_search_bar(){
     driver.findElement(By.xpath(webElementSearchBox)).click();
   }
    @Then("he will be able to write down")
    public void he_will_be_able_to_write_down() {
       home.GeneralXPath(webElementSendKeySearch,"how",webElementGSXpath,"How do I find my account number?");
    }

//    @And("user click search")
//    public void user_click_search() {
//
//    }

    @Then("user verify is directing to the right page")
    public void user_verify_is_directing_to_the_right_page() {
            home.validation1();
    }
                    // user sign in
     @When("user click sign in option")
     public void user_click_sign_in_option() {
        driver.findElement(By.xpath(webElementSignIn)).click();
//         home.GeneraSignlXPath(webElementSignIn,webElementGSignINXpath,"Online Banking");
     }

    @Then("user enter {string} and {string}")
    public void user_enter_and(String username, String password) {
     driver.findElement(By.xpath(webElementSignUserName)).sendKeys(username);
     driver.findElement(By.xpath(webElementSignPassWord)).sendKeys(password);
    }

    @Then("user try to log in to account")
    public void user_try_to_log_in_to_account() {
        driver.findElement(By.xpath(webElementSignIN)).click();

    }
    // sign in using list data
    @Then("user enter folowing data")
    public void user_enter_folowing_data(DataTable dataTable) throws InterruptedException {
        List<List<String>> data=dataTable.asLists(String.class);
        for(int i=0;i<data.size();i++){
            System.out.println("the size is = "+data.size());
      driver.findElement(By.xpath(webElementSignUserName)).sendKeys(data.get(i).get(0));
      driver.findElement(By.xpath(webElementSignPassWord)).sendKeys(data.get(i).get(1));
      Thread.sleep(2000);
            driver.findElement(By.xpath(webElementSignUserName)).sendKeys(data.get(i).get(1));
            driver.findElement(By.xpath(webElementSignPassWord)).sendKeys(data.get(i).get(1));

        }
    }
    @Then("user enter the credentials below")
    public void user_enter_the_credentials_below(DataTable dataTable) {
        List<Map<String, String>> map = dataTable.asMaps(String.class, String.class);
        for (int i = 0; i < map.size(); i++) {
            driver.findElement(By.xpath(webElementSignUserName)).sendKeys(map.get(i).get("username"));
            driver.findElement(By.xpath(webElementSignPassWord)).sendKeys(map.get(i).get("password"));
        }
    }
               // system testing for register account

        @When("i click learn more about banking")
        public void i_click_learn_more_about_banking() {
     driver.findElement(By.xpath(webElementLearnAbout)).click();
        }

        @Then("i click on enroll now")
        public void i_click_on_enroll_now() {
            driver.findElement(By.xpath(webElementEnrollNow)).click();
        }

        @Then("i hit i am the account owner")
        public void i_hit_i_am_the_account_owner() {
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("scroll(0,50)");
            driver.findElement(By.xpath(webElementConfirmation)).click();
        }

        @Then("i click continue")
        public void i_click_continue() {
            driver.findElement(By.cssSelector(webElementContinue)).click();
        }

        @Then("i click accept")
        public void i_click_accept() {
            driver.findElement(By.xpath(webElementAccept)).click();
        }

        @Then("i confirm with accept")
        public void i_confirm_with_accept() {
     driver.findElement(By.cssSelector(webElementCSSClassAccept1)).click();
        }
// |fn   |ln    |email         |atype    |ssn         |atm   |acnumber     |createun |recuser|newpass|repass|
        @When("i enter the credentials")
        public void i_enter_the_credentials(DataTable dataTable) {
         List<Map<String,String>>   listMap=dataTable.asMaps(String.class,String.class);
         for(int i=0;i<listMap.size();i++){
             driver.findElement(By.cssSelector(WebElementFNCSSID)).sendKeys(listMap.get(i).get("fn"));
             driver.findElement(By.cssSelector(webElementCSSLN)).sendKeys(listMap.get(i).get("ln"));
             driver.findElement(By.cssSelector(webElementCSSEmail)).sendKeys(listMap.get(i).get("email"));
             driver.findElement(By.cssSelector(webElementCSSAccountType)).sendKeys(listMap.get(i).get("atype"));
             driver.findElement(By.cssSelector(webElementCSSContainsSSN)).sendKeys(listMap.get(i).get("ssn"));
             driver.findElement(By.cssSelector(webElementCSSIDATM)).sendKeys(listMap.get(i).get("atm"));
             driver.findElement(By.cssSelector(webElementCSSNameAccountNumber)).sendKeys(listMap.get(i).get("acnumber"));
             JavascriptExecutor js = (JavascriptExecutor) driver;
             js.executeScript("scroll(0,50)");
             driver.findElement(By.cssSelector(webElementCSSIDReEnterUserName)).sendKeys(listMap.get(i).get("createun"));
             driver.findElement(By.cssSelector(webElementCSSNewPassword)).sendKeys(listMap.get(i).get("recuser"));
             driver.findElement(By.cssSelector(webElementCSSNewName)).sendKeys(listMap.get(i).get("newpass"));
             driver.findElement(By.cssSelector(webElementCSSClassContinue2)).sendKeys(listMap.get(i).get("repass"));
         }

        }

        @Then("user click continue")
        public void user_click_continue() {
            driver.findElement(By.cssSelector(webElementCSSClassContinue2)).click();
        }






}
