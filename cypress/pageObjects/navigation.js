class Navigation {
    get myAccountBtn () {
        return cy.get('a[id="dropdownCurrency"]').eq(1)
    }

    clickMyAccount () {
        this.myAccountBtn.click({force:true})
    }

    get signUp () {
        return cy.get('a[href="https://www.phptravels.net/register"]')
    }

    clickSignUp () {
        this.signUp.click({force:true})
    }
}

export const navigation = new Navigation