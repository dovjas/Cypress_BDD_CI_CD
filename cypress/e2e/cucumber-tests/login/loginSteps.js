import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from "./loginPage";
import "../../common/commonSteps";

const login = new LoginPage();
const username ='username';
const password = 'password';


Given('I open login page',()=>{
    cy.visit('http://zero.webappsecurity.com/login.html');
})
When('I fill username {string}',(username)=>{
    login.enterUsername(username);
})
And('I fill password {string}',(password)=>{
    login.enterPassword(password);
})
And('I click login',()=>{
    login.clickLogin();
})
Then('I should see homepage',()=>{
    cy.get('#account_summary_tab').should('be.visible');
})
Then('I should see error message',()=>{
    login.getErrorMessage().should('be.visible');
})