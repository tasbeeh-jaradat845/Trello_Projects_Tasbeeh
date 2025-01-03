class createBoardAssertions{
    checkInputHaveValue(){
        cy.findByTestId("board-name-input").should("have.value","TrelloBoard")
        return this;
    }
}
export default createBoardAssertions