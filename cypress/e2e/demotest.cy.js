/// <reference types ="cypress"/>

it('Google',() =>{
    cy.visit('https://google.com/')
    cy.get('.a4bIc',).type('Game of Thrones{Enter}')
    
})