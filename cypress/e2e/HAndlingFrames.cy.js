///<reference types="Cypress"/>
import  "cypress-iframe";
describe('Frames',()=>{
    it.only('approach 1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe=cy.get("#mce_0_ifr")
                        .its('0.contentDocument.body')
                        .should('be.visible')
                        .then(cy.wrap);
            iframe.clear().type('Welcome {selectAll}');
            cy.get("[aria-label='Bold']").click();

    })

    it.skip('approach 3 - by using cypress iframe plugin',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear();
        cy.iframe('#mce_0_ifr').type("Welcome {selectAll}");
        cy.wait(5000)
        cy.get("[aria-label='Bold']").click();

        

    })
})