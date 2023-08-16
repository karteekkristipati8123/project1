/// <reference types="cypress"/>
describe('assertions', () => {
    it('implicit assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      cy.url().should('include','orangehrmlive')
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('contain','opensource-demo')
      })
    

} )