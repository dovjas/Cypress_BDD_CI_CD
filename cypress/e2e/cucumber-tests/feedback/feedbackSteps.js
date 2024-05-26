import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import FeedbackformPage from './feedbackPage';
import "../../common/commonSteps";

const form = new FeedbackformPage();
const name = 'Jonas';
const email = 'jonas@email.com';
const subject = 'all ok';
const text = 'today is a good day';

Given('I open feedback form', () => {
    form.visitForm();
});

When('I fill feedback form', () => {
    form.enterName(name);
    form.enterEmail(email);
    form.enterSubject(subject);
    form.enterText(text);
});

And('I click on send button', () => {
    form.clickSendMessage();
});
