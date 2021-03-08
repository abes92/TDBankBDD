package testRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
  features = {"/Users/abestaieb/2021_PreparationBDD/TDBank/src/test/java/features"}//the path of feature file
  ,glue ={"stepDefinitions"}//the path of step definition file
   ,plugin ={"pretty","html:target/cucumber-html-report.html","json:target/cucumber.json", "pretty:target/cucumber-pretty.txt"
        ,"usage:target/cucumber-usage.json", "junit:target/Cucumber-results.xml"}//to generate different type of report
  ,strict = true //it will check if any step is not define in step definition file
   ,dryRun =false  // to check the mapping between feature file and step definition file
   ,monochrome = true // display the console output in a proper readable format


)

public class TestRunner {
}
