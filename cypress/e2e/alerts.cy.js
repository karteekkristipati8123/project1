/// <reference types ='cypress'/>

describe('Handling alerts',()=>{
    it('simple alers',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on("window:alert",(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result')
        .should('have.text','You successfully clicked an alert')
    })
    it('confirm alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:alert",(t)=>{
         expect(t).to.contains('I am a JS Confirm');
        })
        cy.get('#result')
        .should('have.text','You clicked: Ok');
    })

    it('prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
         cy.stub(win,'prompt').returns('Welcome');
         })
        cy.get("button[onclick='jsPrompt()']").click();

        cy.get('#result')
       .should('have.text','You entered: Welcome');

    })


})