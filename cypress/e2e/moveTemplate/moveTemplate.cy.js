import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import datautils from "../../support/datautils.cy";
import moveTemplateActions from "../../pageObject/moveTemplate/actions.cy";
import moveTemplateAssertions from "../../pageObject/moveTemplate/assertions.cy";
import sharedActions from "../../pageObject/shared/actions.cy";

const boardName="R3-board"
const templateName="R3-template"
const isTemplate=true
const destinationListNumber=2
let boardURL,boardId,listId;
const datautil=new datautils()
const moveTemplateAction=new moveTemplateActions()
const moveTemplateAssertion=new moveTemplateAssertions()
const sharedAction = new sharedActions();

Before(()=>{
    datautil.createBoard(boardName)
    .then((response)=>{
        boardURL=response.body.url;
        boardId=response.body.id;
        datautil.getLists(boardId)
        .then((response)=>{
            listId = response.body[0].id
            datautil.createCard(listId,templateName,isTemplate)
        })
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

When("The user clicks on edit card",()=>{
    sharedAction.clickOnEditCard()
})

When("The user clicks on move option",()=>{
    moveTemplateAction.clickOnmoveOption()
})

When("The user clicks on destination list dropdown",()=>{
    moveTemplateAction.clickOnDestinationListDropdown()
})

When("The user clicks on destination list",()=>{
    moveTemplateAction.clickOnDestinationList(destinationListNumber)
})

When("The user clicks on move button",()=>{
    moveTemplateAction.clickOnMoveButton()
})

Then("The user confirms the template is moved to destination list successfully",()=>{
    moveTemplateAssertion.checkDestinationListContainstemplate(templateName,destinationListNumber)
})

After(()=>{
    cy.wait(3000)
    datautil.deleteBoard(boardId)
})

When("The user clicks on card template to open it",()=>{
    sharedAction.clickOnCardTemplate()
})

When("The user clicks on move option in opened card",()=>{
    moveTemplateAction.clickOnMoveOptionInOpenedCard()
})

When("The user closes the template card they opened before",()=>{
    sharedAction.closeOpenedTemplateEditor()
})