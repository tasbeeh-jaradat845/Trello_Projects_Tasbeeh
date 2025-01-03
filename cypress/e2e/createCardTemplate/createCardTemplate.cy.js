import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import datautils from "../../support/datautils.cy";
import createCardTemplateActions from "../../pageObject/createCardTemplate/actions.cy";
import createCardTemplateAssertions from "../../pageObject/createCardTemplate/assertions.cy";
import sharedActions from "../../pageObject/shared/actions.cy";

const boardName="R3-board"
let boardURL,boardId;
const datautil=new datautils()
const createCardTemplateAction=new createCardTemplateActions()
const createCardTemplateAssertion=new createCardTemplateAssertions()
const sharedAction = new sharedActions();

Before({tags:"@TC-0 or @TC-1"},()=>{
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
Given("The user opens board",()=>{
    sharedAction.openBoard(boardURL)
    cy.wait(1000)
})

When("The user clicks on template card icon",()=>{
    createCardTemplateAction.clickOnTemplateCardIcon()
})

When("The user clicks on Create new template button",()=>{
    createCardTemplateAction.clickOnCreateNewTemplateButton()
})

When("The user types the name of the template",()=>{
    createCardTemplateAction.typeNameOfTemplate("MyFirstTemplate")
})

When("The user clicks on Add button",()=>{
    createCardTemplateAction.clickOnAddButton()
})

Then("Card template is created successfully",()=>{
    createCardTemplateAssertion.checkCardTemplateIsOpened()
})

After({tags:"@TC-0 or @TC-1"},()=>{
    cy.wait(3000)
    datautil.deleteBoard(boardId)
})

Then("Card template is not created",()=>{
    createCardTemplateAssertion.checkReturningToCreateCardTemplatesDialogue()
})