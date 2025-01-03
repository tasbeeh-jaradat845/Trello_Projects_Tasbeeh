Feature: Delete Card functionality
    @TC-0 @smokeTest
    Scenario: Validate user can delete existing card by "Delete" button in Archived items list
    Given The user opens the board contains the card
    And The user clicks on Edit card
    And The user clicks on Archive
    And The user opens board Menu
    And The user clicks on Archived items
    And The user deletes the card
    And The user confirms the deletion
    Then The card will be deleted successfully
    @TC-1 @smokeTest
    Scenario: Validate user can delete existing card by "Delete" button in card details dialogue
    Given The user opens the board contains the card
    And The user clicks on Edit card
    And The user clicks on Archive
    And The user opens board Menu
    And The user clicks on Archived items
    And The user clicks on card
    And The user clicks on delete button in card details dialogue
    And The user confirms the deletion in card details dialogue
    Then The card will be deleted successfully
