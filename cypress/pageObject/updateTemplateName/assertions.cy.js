class updateTemplateNameAssertions{
    checkCardNameContainsNewName(templateName){
        cy.findByTestId("card-name").should("have.text",templateName)
        return this
    }
    checkSaveButtonStillExists(){
        cy.get('[type="submit"]').contains("Save").should("exist")
        return this
    }
}
export default updateTemplateNameAssertions