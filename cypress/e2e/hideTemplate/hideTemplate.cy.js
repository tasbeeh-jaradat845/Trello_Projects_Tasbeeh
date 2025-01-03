import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import datautils from "../../support/datautils.cy";
import hideTemplateActions from "../../pageObject/hideTemplate/actions.cy";
import hideTemplateAssertions from "../../pageObject/hideTemplate/assertions.cy";
import sharedActions from "../../pageObject/shared/actions.cy";

const boardName="R3-board"
const templateName="R3-template"
const isTemplate=true
let boardURL,boardId,listId;
const datautil=new datautils()
const hideTemplateAction=new hideTemplateActions()
const hideTemplateAssertion=new hideTemplateAssertions()
const sharedAction = new sharedActions();

Before({tags:"@TC-0 or @TC-1"},()=>{
    datautil.createBoard(boardName)
    .then((response)=>{
        boardURL=response.body.url;
        boardId=response.body.id;
        datautil.getLists(boardId)
        .then((response)=>{
            listId = response.body[0].id
            datautil.createCard(listId,templateName,isTemplate)
            cy.intercept("https://trello.com/1/resources/templates/categories").as("categories")
            cy.fixture("trelloData").then((data)=>{
                cy.login(data.email,data.password)
            })
            cy.wait("@categories")
        })
    })
})

Given("The user opens board",()=>{
    expect(boardURL).to.exist;
    sharedAction.openBoard(boardURL)
    cy.wait(1000)
})

When("The user clicks on edit card",()=>{
    sharedAction.clickOnEditCard()
})

When("The user clicks on Hide from list option",()=>{
    hideTemplateAction.clickOnHideFromListOption()
})

When("The user opens board Menu",()=>{
    sharedAction.openBoardMenu()
})

When("The user clicks on Archived items",()=>{
    sharedAction.clickOnArchivedItems()
})

Then("The user confirms the template is moved to Archived items successfully",()=>{
    hideTemplateAssertion.checkArchivedItemsContainsTemplate(templateName)
})

After({tags:"@TC-0 or @TC-1"},()=>{
    cy.wait(3000)
    datautil.deleteBoard(boardId)
})

When("The user clicks on card template to open it",()=>{
    sharedAction.clickOnCardTemplate()
})

When("The user clicks on Hide from list button",()=>{
    hideTemplateAction.clickOnHideFromListButton()
})

When("The user closes the template card they opened before",()=>{
    sharedAction.closeOpenedTemplateEditor()
})