class Loginpage2{

    txtUsername=":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    txtPassword=":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    btnlogin=".oxd-button"
    msg=".oxd-topbar-header-breadcrumb > .oxd-text"

    enterUsrname(username)
    {
        cy.get(this.txtUsername).type(username)

    }
    enterPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    clickLoginbutton()
    {
        cy.get(this.btnlogin).click()
    }
    verifyLogin()
    {
        cy.get(this.msg).should('have.text','Dashboard');
    }
}
export default Loginpage2