// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('login', (email, password) => { 
   cy.session([email, password], () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.url().should('eq',"https://www.saucedemo.com/v1/index.html");
    cy.get('input[data-test="username"]').type(email);
    cy.get('input[data-test="password"]').type(password);
    cy.get("#login-button").click(); 
   })
 })
 Cypress.Commands.add ("successfulcheckout",(firstName,lastName,postalCode)=>{
   cy.get('input[data-test="firstName"]').type(firstName);
   cy.get('input[data-test="lastName"]').type(lastName);
   cy.get('input[data-test="postalCode"]').type(postalCode);
   cy.get('.cart_button').click();
   })
   

//
//
// 
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('console',(agent)=>{
   cy.log("This is "+agent);
})
