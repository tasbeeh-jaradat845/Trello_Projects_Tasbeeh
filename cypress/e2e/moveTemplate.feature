Feature: Move template to another list functionality
    @TC-0 @smokeTest
    Scenario: Validate user can move a template to another list successfully after clicking on edit
    Given The user opens board
    When The user clicks on edit card
    And The user clicks on move option
    And The user clicks on destination list dropdown
    And The user clicks on destination list
    And The user clicks on move button
    Then The user confirms the template is moved to destination list successfully
    @TC-1 @smokeTest
    Scenario: Validate user can move a template to another list successfully after opening card
    Given The user opens board
    When The user clicks on card template to open it
    And The user clicks on move option in opened card
    And The user clicks on destination list dropdown
    And The user clicks on destination list
    And The user clicks on move button
    And The user closes the template card they opened before
    Then The user confirms the template is moved to destination list successfully