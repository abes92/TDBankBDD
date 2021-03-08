Feature: testing TD bank functionality


  Scenario: search box functionality
    Given user in td bank home page
    When  user click search bar
    Then  he will be able to write down
    Then  user verify is directing to the right page

    Scenario Outline: sign in functionality
      Given  user in td bank home page
      When  user click sign in option
      Then user enter "<userName>" and "<passWord>"
      And user try to log in to account
  Examples:
      |userName|passWord|
      |abes92  |123ase  |
      |abes90  |1234qwe |
      |hamza   |3874yt  |
Scenario: Sign in functionality using data
  Given  user in td bank home page
  When  user click sign in option
  Then user enter folowing data
     |abes54|54673|
     |hamza76|ge864|
  And user try to log in to account
  Scenario: sign in by using map
    Given  user in td bank home page
    When  user click sign in option
    Then user enter the credentials below
    |username|password|
    |abes43  |65784   |
    |hamza76 |8958u   |
    |sedik09 |975jhgu |
    And user try to log in to account
  Scenario: click randomly
    Given  user in td bank home page
    When i click learn more about banking
    Then i click on enroll now
    And  i hit i am the account owner
    Then i click continue
    And  i click accept
    And  i confirm with accept
    When i enter the credentials
      |fn   |ln    |email         |atype    |ssn         |atm   |acnumber     |createun |recuser|newpass|repass|
      |abes |david |david@gmail.com|checking|1324-647-657|123 546 7568 |fd84 u765|david92|david92|Ama098|Ama098|

    Then user click continue