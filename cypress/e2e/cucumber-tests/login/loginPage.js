class LoginPage {
    locator = {
        username_input:'#user_login',
        password_input:'#user_password',
        login_btn:'input[type="submit"]',
        error_message:'.alert-error'
    };

    enterUsername(username){
        cy.get(this.locator.username_input).type(username)
    }
    enterPassword(password){
        cy.get(this.locator.password_input).type(password)
    }
    clickLogin(){
        cy.get(this.locator.login_btn).click()
    }
    getErrorMessage(){
        return cy.get(this.locator.error_message)
    }
}
export default LoginPage;