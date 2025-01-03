class moveTemplateAssertions{
    checkDestinationListContainstemplate(templateName,listNumber){
        cy.findByTestId("list").eq(listNumber).find('[data-testid="card-name"]').should("have.text",templateName)
        return this
    }
}
export default moveTemplateAssertions