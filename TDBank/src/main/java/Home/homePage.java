package Home;

import common.webAPI;
import org.openqa.selenium.By;

import static Home.HomePageWebElement.*;
public class homePage extends webAPI {



//    public void search_bar(){
//        driver.findElement(By.xpath(webElementSearchBox)).click();
//    }
//    public void sendKey(){
//      driver.findElement(By.xpath(webElementSearchBox)) .sendKeys("How do I find my account number?");
//   }
//   public void ClickSearch(){
//        driver.findElement(By.xpath(webElementSearchBox)).click();
//   }
   public void validation1(){
        Validation(webElementActualResult,"You searched for How do I find my account number?");
   }
}
