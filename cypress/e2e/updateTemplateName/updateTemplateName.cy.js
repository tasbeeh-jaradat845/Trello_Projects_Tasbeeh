import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import datautils from "../../support/datautils.cy";
import updateTemplateNameActions from "../../pageObject/updateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../pageObject/updateTemplateName/assertions.cy";
import sharedActions from "../../pageObject/shared/actions.cy";

const boardName="R3-board"
const cardTemplateName="R3-template"
const isTemplate=true
const templateNewName="Updated"
let boardURL,boardId,listId;
const datautil=new datautils()
const updateTemplateNameAction=new updateTemplateNameActions()
const updateTemplateNameAssertion=new updateTemplateNameAssertions()
const sharedAction = new sharedActions();

Before({tags:"@TC-0 or @TC-1 or @TC-2"},()=>{
    datautil.createBoard(boardName)
    .then((response)=>{
        boardURL=response.body.url;
        boardId=response.body.id;
        datautil.getLists(boardId)
        .then((response)=>{
            listId = response.body[0].id
            datautil.createCard(listId,cardTemplateName,isTemplate)
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

When("The user clicks on card template to open it",()=>{
    sharedAction.clickOnCardTemplate()
})

When("The user clicks on card title input",()=>{
    updateTemplateNameAction.clickOnCardTitleInput()
})

When("The user clears the previous name and types new name",()=>{
    updateTemplateNameAction.typeTemplateNameInCardDetailsDialogue(templateNewName)
})

When("The user closes the template card they opened before",()=>{
    sharedAction.closeOpenedTemplateEditor()
})

Then("The user confirms the name is updated successfully",()=>{
    updateTemplateNameAssertion.checkCardNameContainsNewName(templateNewName)
})

After({tags:"@TC-0 or @TC-1 or @TC-2"},()=>{
    cy.wait(3000)
    datautil.deleteBoard(boardId)
})

When("The user clicks on edit card",()=>{
    sharedAction.clickOnEditCard()
})

When("The user clears the previous name and types new name directly",()=>{
    updateTemplateNameAction.typeTemplateNameDirectly(templateNewName)
})

When("The user clicks on Save button",()=>{
    updateTemplateNameAction.clickOnSave()
})

When("The user clears the previous name",()=>{
    updateTemplateNameAction.clearName()
})

Then("The user confirms the template can't be updated",()=>{
    updateTemplateNameAssertion.checkSaveButtonStillExists()
})
