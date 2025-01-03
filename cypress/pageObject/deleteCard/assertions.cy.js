class deleteCardAssertions{
    ArchivedListIsEmpty(){
        cy.get(".empty-list").should("exist")
        cy.findByTestId("card-name").should("not.exist")
    }
}
export default deleteCardAssertions