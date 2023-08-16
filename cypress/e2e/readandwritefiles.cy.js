/// <reference types="cypress"/>
// describe('test suite', ()=>{
//     it('Read files using Fixture',()=>{
//         cy.fixture('example.json').then((data)=>{
//             cy.log(data.name)
//             cy.log(data.email)
//             cy.log(data.body)
//         })
    
//     } )
// })

it('Read files using readfile() ',()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
    

} )

it ('write file demo',()=>{
    cy.writeFile('sample.text','Hello i am Ragav')
    cy.writeFile('sample.text','i am learning cypress',{flag:  'a+' })
})