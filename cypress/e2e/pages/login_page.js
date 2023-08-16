 class Loginpage{
    enterUsrname(username)
    {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

    }
    enterPassword(password)
    {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }
    clickLoginbutton()
    {
        cy.get('.oxd-button').click()
    }
    verifyLogin()
    {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard');
    }
}
export default Loginpage