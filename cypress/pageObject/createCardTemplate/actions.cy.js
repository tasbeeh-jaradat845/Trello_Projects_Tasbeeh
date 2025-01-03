class createCardTemplateActions{
    clickOnTemplateCardIcon(){
        cy.findByTestId("TemplateCardIcon").first().click()
        return this;
    }
    clickOnCreateNewTemplateButton(){
        cy.findByTestId("create-new-template-card-button").click()
        return this;
    }
    typeNameOfTemplate(templateName){
        cy.findByTestId("create-template-card-composer").type(templateName)
        return this;
    }
    clickOnAddButton(){
        cy.findByTestId("new-template-card-submit-button").click()
        return this;
    }
}
export default createCardTemplateActions