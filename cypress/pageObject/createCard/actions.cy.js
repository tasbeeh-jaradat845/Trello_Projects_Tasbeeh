class createCardActions{
    clickOnAddACardButton(){
        cy.findByTestId("list-add-card-button").first().click()
        return this;
    }
    TypeCardName(cardName){
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        return this;
    }
    clickOnAddCardButton(){
        cy.findByTestId("list-card-composer-add-card-button").click()
        return this;
    }
}
export default createCardActions