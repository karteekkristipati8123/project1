/// <reference types = 'cypress'/>

const { get } = require("cypress/types/lodash")

describe('WebApp',()=>{
    it('Login',()=>{
        cy.visit('https://www.etsy.com/?ref=lgo')
        cy.get('.wt-btn.wt-btn--small.wt-btn--transparent.wt-mr-xs-1.inline-overlay-trigger.signin-header-action.select-signin.header-button').click()
        cy.window().then(win => {
            // Get the list of window handles
            winHandles = win.top.windows;
            // Switch to the newly opened window
            const newWin = winHandles[winHandles.length - 1];
            win.top.location = newWin.location;
            cy.get('[class="wt-input "]').type('karthikkristipati123@gmail.com');
        })

    })
})
