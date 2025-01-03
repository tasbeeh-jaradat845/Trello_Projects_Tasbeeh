import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps"
import datautils from "../../support/datautils.cy";
import deleteCardActions from "../../pageObject/deleteCard/actions.cy";
import deleteCardAssertions from "../../pageObject/deleteCard/assertions.cy";
import sharedActions from "../../pageObject/shared/actions.cy";

const boardName="R3-board"
const cardName="R3-card"
const isTemplate=false
let boardURL,boardId,listId;
const datautil=new datautils()
const deleteCardAction=new deleteCardActions()
const deleteCardAssertion=new deleteCardAssertions()
const sharedAction = new sharedActions();

Before({tags:"@TC-0 or @TC-1"},()=>{
    datautil.createBoard(boardName)
    .then((response)=>{
        boardURL=response.body.url;
        boardId=response.body.id;
        datautil.getLists(boardId)
        .then((response)=>{
            listId = response.body[0].id
            datautil.createCard(listId,cardName,isTemplate)
        })
    })

    cy.intercept("https://trello.com/1/resources/templates/categories").as("categories")
    cy.fixture("trelloData").then((data)=>{
        cy.login(data.email,data.password)
    })
    cy.wait("@categories")
})
Given("The user opens the board contains the card",()=>{
    sharedAction.openBoard(boardURL)
    cy.intercept(`https://trello.com/1/board/${boardId}?fields=id&accessRequests=true`).as("board")
    cy.wait("@board")
    cy.screenshot({capture:"fullPage"})
})

When("The user clicks on Edit card",()=>{
    sharedAction.clickOnEditCard()
})

When("The user clicks on Archive",()=>{
    deleteCardAction.clickOnArchive()
})

When("The user opens board Menu",()=>{
    sharedAction.openBoardMenu()
})

When("The user clicks on Archived items",()=>{
    sharedAction.clickOnArchivedItems()
})

When("The user deletes the card",()=>{
    deleteCardAction.clickOnDelete()
})

When("The user confirms the deletion",()=>{
    deleteCardAction.clickOnDeleteConfirmation()
})

Then("The card will be deleted successfully",()=>{
    deleteCardAssertion.ArchivedListIsEmpty()
})

After({tags:"@TC-0 or @TC-1"},()=>{
    cy.wait(3000)
    datautil.deleteBoard(boardId)
})


When("The user clicks on card",()=>{
    deleteCardAction.clickOnCard()
})

When("The user clicks on delete button in card details dialogue",()=>{
    deleteCardAction.clickOnDeleteInCardDetails()
})

When("The user confirms the deletion in card details dialogue",()=>{
    deleteCardAction.clickOnDeleteConfirmationInCardDetails()
})