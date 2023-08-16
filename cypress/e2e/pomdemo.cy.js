
// import { data } from "cypress/types/jquery";
import Loginpage2 from "./pages/login_page2"

it('POM DEMO',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   const ln= new Loginpage2();
    ln.enterUsrname("Admin")
    ln.enterPassword("admin123")
    ln.clickLoginbutton();
    ln.verifyLogin();
})

it.only('POM DEMO',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.fixture('orangehrm.json').then((data)=>{
    const ln= new Loginpage2();
    ln.enterUsrname(data.userName)
    ln.enterPassword(data.password)
    ln.clickLoginbutton();
    ln.verifyLogin();
    })
   
})