import { navigation } from "../../pageObjects/navigation"
import { register } from "../../pageObjects/registerPage"
import { hotels } from "../../pageObjects/hotels"
const faker = require('faker')

var userData = {
    randomName: faker.name.findName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password() + faker.datatype.number(),
    randomConfirmPassword: faker.internet.password(),
    randomPhoneNumber: faker.phone.phoneNumber()
    //randomShortPassword: faker.internet.password(2),
    //randomPasswordOnlyString: faker.lorem.word(8)
}

describe ('register', () => {
    it('visit home page', () => {
        cy.visit('https://www.phptravels.net/home')
    })

    it('open register page', () => {
        navigation.clickMyAccount()
        navigation.clickSignUp()
    })

    it('fill register page', () => {
        register.fillRegister(userData.randomName, userData.randomLastName, userData.randomPhoneNumber, userData.randomEmail, userData.randomPassword, userData.randomPassword)
        register.clickSignUpBtn()
        cy.wait(2000)
        

    })

    it('fill destination', () => {
        register.clickHomePageBtn()
        cy.wait(2000)
        hotels.clickHotels()
        hotels.hotel.type('tria', {force:true})
        /*cy.type('{enter}')
        hotels.clickDate()
        hotels.date.clear()
        hotels.fillDate(13, 14, 2022)*/
    })

    
})