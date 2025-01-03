class createCardTemplateAssertions{
    checkCardTemplateIsOpened(){
        cy.findByTestId("template-card-back-banner").should("exist").and('contain','This is a Template card.')
        return this;
    }
    checkReturningToCreateCardTemplatesDialogue(){
        cy.get(".pt-0").should("contain","You don’t have any templates. Create a template to make copying cards easy.")
        return this;
    }
}
export default createCardTemplateAssertions