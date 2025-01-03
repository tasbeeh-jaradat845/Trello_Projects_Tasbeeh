import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import datautils from "../../support/datautils.cy";
import createCardActions from "../../pageObject/createCard/actions.cy";
import createCardAssertions from "../../pageObject/createCard/assertions.cy";
import sharedActions from "../../pageObject/shared/actions.cy";

const createCardAction = new createCardActions();
const createCardAssertion = new createCardAssertions();
const sharedAction = new sharedActions();

const boardName="R3-board"
let boardURL,boardId;
const datautil=new datautils()
Before(()=>{
    datautil.createBoard(boardName)
    .then((response)=>{
        boardURL=response.body.url;
        boardId=response.body.id;
    })
    cy.intercept("https://trello.com/1/resources/templates/categories").as("categories")
    cy.fixture("trelloData").then((data)=>{
        cy.login(data.email,data.password)
    })
    cy.wait("@categories")
})
Given("The user navigates to board",()=>{
    sharedAction.openBoard(boardURL)
})

When("The user clicks on Add a card button",()=>{
    createCardAction.clickOnAddACardButton()
})

When("The user types the name of the card in the input field",()=>{
    createCardAction.TypeCardName("myCard")
})

When("The user clicks on Add card button",()=>{
    createCardAction.clickOnAddCardButton()
})


Then("The card will be created successfully",()=>{
    createCardAssertion.checkInputHaveValue("myCard")
})

After(()=>{
    cy.wait(3000)
    datautil.deleteBoard(boardId)
 })