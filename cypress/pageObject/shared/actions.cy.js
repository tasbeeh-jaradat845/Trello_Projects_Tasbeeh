/// <reference types="cypress" /> 

class sharedActions{
    openBoard(boardURL){
        cy.visit(boardURL)
        return this;
    }
    closeOpenedTemplateEditor(){
        cy.findByTestId("CloseIcon").first().click({force:true})
        return this
    }
    clickOnCardTemplate(){
        cy.findByTestId("card-name").click()
        return this
    }
    clickOnEditCard(){
        cy.findByTestId("card-name").trigger("mouseover")
        cy.wait(1000)
        cy.findByTestId("EditIcon").click({force:true})
        return this
    }
    openBoardMenu(){
        cy.get('[aria-label="Show menu"]').click()
        return this;
    }
    clickOnArchivedItems(){
        cy.findByTestId("ArchiveIcon").click()
        return this;
    }
}
export default sharedActions