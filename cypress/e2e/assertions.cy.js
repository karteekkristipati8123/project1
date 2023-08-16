/// <reference types="cypress"/>

describe('assertions', () => {
    it('implicit assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      // should and
      //  Approach 1
      /*
      cy.url().should('include','orangehrmlive')
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('contain','opensource-demo')
        */

        // Approach 2
       /* 
      cy.url().should('include','orangehrmlive')
                .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                .should('contain','opensource-demo')
        */

        // Approach 3
        /*
        cy.url().should('include','orangehrmlive.com')
                .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                .and('not.contain','redhrm')
                .and('contain', 'orangehrm')
        
       // Approach 4
       
        cy.title().should('include','Orange')
                .and('eq','OrangeHRM')
                .and('not.contain','HRM')
        */

        // validation on element 
        cy.get('.orangehrm-login-branding > img').should('be.visible')
           .and('exist')
             
           cy.get('.oxd-button').should('be.visible')
                .and('exist')

    })
    it("explict assertions", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        let expName='Puchun reddy';
        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actName=x.text();
            
            // BDD Assertions
            expect(actName).to.equal(expName)
            // expect(actName).to.not.equal(expName)

            //TDD Assertions
            assert.equal(actName,expName)
            // assert.notEqual(actName,expName)


        })
    })
  })