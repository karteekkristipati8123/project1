///<reference types="cypress"/>
require('@4tw/cypress-drag-drop')
describe('Demo on Mouse Actions',()=>{

    it.skip('Mouser hover',()=>{
        cy.visit('https://demo.opencart.com/index.php?route=common/home&language=en-gb')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
        .should('be.visible');

    })

    it.skip('right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
    })

    it.skip('Double click',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#HTML10 > .widget-content > button').trigger('dblclick');
    })

    it.skip('Darg and Drop',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box5').drag('#box105',{force:true});
   
    })
    
    it('Scrolling page ',()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        // india flag
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:10000});
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        // luxemburg flag
        cy.get(':nth-child(113) > :nth-child(1) > img').scrollIntoView({duration:15000});
        cy.get(':nth-child(113) > :nth-child(1) > img').should('be.visible');
    })
})