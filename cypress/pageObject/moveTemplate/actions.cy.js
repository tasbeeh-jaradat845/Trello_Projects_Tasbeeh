class moveTemplateActions{
    clickOnmoveOption(){
        cy.findByTestId("quick-card-editor-move").click()
        return this
    }
    clickOnDestinationListDropdown() {
        cy.get('[id^="react-select-"][id$="-input"]').eq(1).click();
        return this;
    }
    
    clickOnDestinationList(listNumber) {
        cy.get(`[id^="react-select-"][id$="-option-${listNumber}"]`).click();
        return this;
    }
    
    clickOnMoveButton(){
        cy.findByTestId("move-card-popover-move-button").click()
        return this
    }
    clickOnMoveOptionInOpenedCard(){
        cy.findByTestId("card-back-move-card-button").click()
        return this
    }
}
export default moveTemplateActions