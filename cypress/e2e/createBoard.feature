Feature: Create a board functionality
    @smokeTest
    Scenario: Valisate user can create new board successfully
    Given The user logs in trello website
    When The user clicks on create button
    And The user clicks on create board option
    And The user adds a name to the board
    And The user clicks on create button in create board template
    Then Board will be created successfully

