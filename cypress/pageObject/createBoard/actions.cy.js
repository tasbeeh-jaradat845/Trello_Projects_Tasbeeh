class createBoardActions{
    clickOnCreateButton(){
        cy.findByTestId("header-create-menu-button").click()
        return this;
    }
    clickOnCreateBoardOption(){
        cy.findByTestId("header-create-board-button").click()
        return this;
    }
    typeBoardName(){
        cy.findByTestId("create-board-title-input").type("TrelloBoard")
        return this;
    }
    clickOnCreateButtonInCreateBoardTemplate(){
        cy.findByTestId("create-board-submit-button").click()
        return this;
    }
}
export default createBoardActions