Feature: Login to Application

    As a invalid user
    I can't login into Application
    As a valid user
    I want to login into Application

    Scenario: Invalid login
        Given I open login page  
        And I see "Zero - Log in" in the title
        And I see "/login" in the URL
        When I fill username "invalid username"
        And I fill password "invalid password"
        And I click login 
        Then I should see error message

    Scenario: Valid login
        Given I open login page  
        When I fill username "username"
        And I fill password "password"
        And I click login 
        Then I should see homepage