///<reference types='cypress'/>

describe('Demo on alerts',()=>{
    
   
    it(' simple alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        /*
         //  simple alert( conatains only 'ok' )
        cy.get("button[onclick='jsAlert()']").click();

        cy.on("window:alert",(t)=>{
            expect(t).to.contains('I am a JS Alert');

        })
        cy.get("#result")
        .should('have.text','You successfully clicked an alert')
   
        */
    //  Conform alert (contains ok and cancel)

    
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:alert",(t)=>{
        expect(t).to.contains('I am a JS Confirm');
            })

        cy.get('#result')
        .should('have.text','You clicked: Ok');

        // Prompt alert
    
        cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('Welcome');
        })
    
        cy.get("button[onclick='jsPrompt()']").click();

         cy.get('#result')
        .should('have.text','You entered: Welcome');


        })

        it.only('Authenticted alert',()=>{
            
              cy.visit("https://the-internet.herokuapp.com/basic_auth")
        cy.get("//p[contains(text(),'Congratulations! You must have the proper credenti')]")
        .should('have.contain','Congartulations');
    })
})
/*
cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                                    {
                                                                    username:"admin",
                                                                    password:"admin"

                                                                    }

                                                                });

                                                                */
      