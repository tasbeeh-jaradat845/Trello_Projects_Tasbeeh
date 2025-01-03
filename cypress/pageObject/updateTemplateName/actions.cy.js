class updateTemplateNameActions{
    clickOnCardTitleInput(){
        cy.findByTestId("card-back-title-input").click()
        return this        
    }
    typeTemplateNameInCardDetailsDialogue(templateName){
        cy.wait(1000)
        cy.findByTestId("card-back-title-input").clear()
        cy.findByTestId("card-back-title-input").type(templateName)
        return this
    }
    typeTemplateNameDirectly(templateName){
        cy.findByTestId("quick-card-editor-card-title").clear()
        cy.findByTestId("quick-card-editor-card-title").type(templateName)
        return this 
    }
    clickOnSave(){
        cy.get('[type="submit"]').contains("Save").click()
    }
    clearName(){
    cy.findByTestId("quick-card-editor-card-title").clear()
    }
}
export default updateTemplateNameActions