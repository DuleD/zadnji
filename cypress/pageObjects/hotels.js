class Hotels {
    get hotel () {
        return cy.get('input[class="select2-input"]').eq(0)
    }

    clickHotels () {
        this.hotel.click({force:true})
    }

    get hyatt () {
        return cy.get('.select2-highlighted.select2-result.select2-result-selectable.select2-results-dept-1 > .select2-result-label')
    }

    clickHyatt () {
        this.hyatt.click()
    }

    get date () {
        return cy.get('input[id="checkin"]')
    }

    clickDate () {
        this.date.click()
    }

    pickHotel (skracenicaHotela) {
        skracenicaHotela = this.hotel.type(skracenicaHotela, {force:true})
    }

    fillDate (dan, mesec, godina) {
        this.date.type(dan + '/' + mesec + '/' + godina, {force:true}) 
    }
}

export const hotels = new Hotels