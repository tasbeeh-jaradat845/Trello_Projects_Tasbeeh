class createCardAssertions{
    checkInputHaveValue(cardName){
        cy.findByTestId("card-name").should("contain",cardName)
        return this;
    }
}
export default createCardAssertions