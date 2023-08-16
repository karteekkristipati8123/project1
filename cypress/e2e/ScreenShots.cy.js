///<reference types='cypress'/>

describe('Screenshot',() =>{
    it('demo screenshot',() =>{
        cy.visit('https://demo.opencart.com/')
        cy.viewport(1280, 720)
        cy.screenshot()
        cy.get("img[title='Your Store']").screenshot();
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text','Cameras')
       
    })
})
