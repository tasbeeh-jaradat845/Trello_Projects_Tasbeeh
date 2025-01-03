import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import createBoardActions from "../../pageObject/createBoard/actions.cy"
import createBoardAssertions from "../../pageObject/createBoard/assertions.cy";

const createBoardAction=new createBoardActions();
const createBoardAssertion=new createBoardAssertions();

Given("The user logs in trello website",()=>{
    cy.fixture("trelloData").then((data)=>{
        cy.login(data.email,data.password)
    })
    cy.wait(5000)
})

When("The user clicks on create button",()=>{
    createBoardAction.clickOnCreateButton()
})

When("The user clicks on create board option",()=>{
    createBoardAction.clickOnCreateBoardOption()
})

When("The user adds a name to the board",()=>{
    createBoardAction.typeBoardName()
})

When("The user clicks on create button in create board template",()=>{
    createBoardAction.clickOnCreateButtonInCreateBoardTemplate()
})

Then("Board will be created successfully",()=>{
    createBoardAssertion.checkInputHaveValue()
})