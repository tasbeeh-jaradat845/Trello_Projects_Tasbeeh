import {APIKey,APIToken} from "../support/constants.cy"
class datautils{
    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }
    deleteBoard = (boardId) =>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }
    getLists = (boardId) =>{
        return cy.request(`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`)
    }
    createCard=(listId,cardName,isTemplate)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,
           {"name":cardName,
            "isTemplate":isTemplate
           } 
        )
    }
}
export default datautils;