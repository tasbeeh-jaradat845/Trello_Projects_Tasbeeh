class hideTemplateActions{
    clickOnHideFromListOption(){
        cy.findByTestId("quick-card-editor-archive").click()
        return this
    }
    clickOnHideFromListButton(){
        cy.findByTestId("card-back-archive-button").click()
        return this
    }
}
export default hideTemplateActions