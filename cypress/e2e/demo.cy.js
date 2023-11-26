/// <reference types = "cypress">
describe('demo',()=>{
    it('demo',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#name').type('karthik Reddy');
        cy.get('#email').type('karthikkrstipati123@gmail.com');
        cy.get('#phone').type('8919798123');
        
    })
})