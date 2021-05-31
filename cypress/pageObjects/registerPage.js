class Register {
    get firstName () {
        return cy.get('input[name="firstname"]')
    }

    get lastName () {
        return cy.get('input[name="lastname"]')
    }

    get phoneNumber () {
        return cy.get('input[name="phone"]')
    }

    get email () {
        return cy.get('input[name="email"]')
    }

    get password () {
        return cy.get('input[name="password"]')
    }

    get confirmPassword () {
        return cy.get('input[name="confirmpassword"]')
    }

    get signUpBtn () {
        return cy.get('button[class="signupbtn btn_full btn btn-success btn-block btn-lg"]')
    }

    clickSignUpBtn () {
        this.signUpBtn.click({force:true})
    }

    get homePageBtn () {
        return cy.get('img[src="https://www.phptravels.net/uploads/global/logo.png"]')
    }

    clickHomePageBtn () {
        this.homePageBtn.click()
    }

    fillRegister (firstname, lastname, mobile, mail, pass, confirmpass){
        firstname = this.firstName.type(firstname, {force:true})
        lastname = this.lastName.type(lastname, {force:true})
        mobile = this.phoneNumber.type(mobile, {force:true})
        mail = this.email.type(mail, {force:true})
        pass = this.password.type(pass, {force:true})
        confirmpass = this.confirmPassword.type(confirmpass, {force:true})
    }
}

export const register = new Register