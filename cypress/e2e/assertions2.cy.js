/// <reference types ="cypress"/>

describe("assertions",()=>{
    it('implicit assertions', ()=>{
        cy.visit("https://www.geeksforgeeks.org/")
        cy.url().should('include','for');
        cy.url().should('eq','https://www.geeksforgeeks.org/');
        cy.url().should('contain','geeks');

    

    })
})