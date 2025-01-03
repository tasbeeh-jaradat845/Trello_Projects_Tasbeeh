Feature: Hide template from list functionality
    @TC-0 @regressionTest
    Scenario: Validate user can hide template from list successfully after clicking on edit
    Given The user opens board
    When The user clicks on edit card
    And The user clicks on Hide from list option
    And The user opens board Menu
    And The user clicks on Archived items
    Then The user confirms the template is moved to Archived items successfully
    @TC-1 @regressionTest
    Scenario: Validate user can hide template from list successfully after opening card
    Given The user opens board
    When The user clicks on card template to open it
    And The user clicks on Hide from list button
    And The user closes the template card they opened before
    And The user opens board Menu
    And The user clicks on Archived items
    Then The user confirms the template is moved to Archived items successfully