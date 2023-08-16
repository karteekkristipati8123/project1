/// <reference types="Cypress"/>
describe('dropdown',()=>{
    it('dropdown with select tag',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country').select('India')
        .should('have.value','india')
    })

    it.only('dropdown without select tag',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('India').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text','India')
    })

    it.only('dropdown with AutoSuggestions',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get('').click()
        cy.get('.select2-search__field').type('India').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text','India')
    })


})