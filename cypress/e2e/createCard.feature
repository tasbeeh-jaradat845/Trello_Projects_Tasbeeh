Feature: Create card in trello website
    @smokeTest
    Scenario: Validate that user can create a card successfully
        Given The user navigates to board
        When The user clicks on Add a card button
        When The user types the name of the card in the input field
        When The user clicks on Add card button
        Then The card will be created successfully