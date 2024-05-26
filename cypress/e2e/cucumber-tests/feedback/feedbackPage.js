const URL = 'http://zero.webappsecurity.com/feedback.html'

class FeedbackformPage {
    locator = {
        name_input: '#name',
        email_input: '#email',
        subject_input: '#subject',
        text_area: '#comment',
        sendMessage_btn: '.btn-signin'
    };
    visitForm(){
        cy.visit(URL)
    }

    enterName(name) {
        cy.get(this.locator.name_input).type(name);
    }

    enterEmail(email) {
        cy.get(this.locator.email_input).type(email);
    }

    enterSubject(subject) {
        cy.get(this.locator.subject_input).type(subject);
    }

    enterText(text) {
        cy.get(this.locator.text_area).type(text);
    }

    clickSendMessage() {
        cy.get(this.locator.sendMessage_btn).click();
    }
}

export default FeedbackformPage;