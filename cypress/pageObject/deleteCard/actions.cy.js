/// <reference types="cypress" /> 

class deleteCardActions{
    clickOnArchive(){
        cy.findByTestId("quick-card-editor-archive").click()
        cy.wait(3000)
        return this;
    }
    clickOnDelete(){
        cy.get(".archived-list-card").find("button").contains("Delete").first().click()
        cy.wait(1000)
        return this;
    }
    clickOnDeleteConfirmation(){
        cy.get('[aria-label="delete-confirm"]').click()
        return this;
    }
    clickOnCard(){
        cy.findByTestId("card-name").click()
        return this;
    }
    clickOnDeleteInCardDetails(){
        cy.findByTestId("card-back-delete-card-button").click()
        return this;
    }
    clickOnDeleteConfirmationInCardDetails(){
        cy.findByTestId("popover-confirm-button").click()
        return this;
    }
}
export default deleteCardActions