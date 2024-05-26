import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep('I see {string} in the title',(title)=>{
    cy.title().should('include',title);
})

defineStep('I see {string} in the URL',(url)=>{
    cy.url().should('include',url)
})