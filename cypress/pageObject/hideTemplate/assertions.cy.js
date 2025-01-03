class hideTemplateAssertions{
    checkArchivedItemsContainsTemplate(templateName){
        cy.findByTestId('board-menu-current-panel').find('[data-testid="card-name"]').should("have.text",templateName)

    }
}
export default hideTemplateAssertions