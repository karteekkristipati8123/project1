/// <reference types="cypress"/>
require('cypress-file-upload')

describe('Demo on fileupload',()=>{

    it.skip('Single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('java x path.txt');
        cy.get('#file-submit').click();
        cy.wait(5000)
    })
    it.skip('file upload rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'java x path.txt',fileName:'xpath.txt'});
        cy.get('#file-submit').click();
        cy.wait(5000)
    })
    it.skip('File Upload - drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('java x path.txt',{subjectType:'drag-n-drop'});
        cy.wait(5000); 
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('java x path.txt')

    })

    it.skip('Multiple files upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(["java x path.txt","JMeter.txt"]);
       
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    it.only('shadow dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-button smart-element smart-button',{includeShadowDom:true}).attachFile('JMeter.txt');
        cy.wait(5000)
    })


})