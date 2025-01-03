Feature: Update template name functionality
    @TC-0 @regressionTest
    Scenario: Validate that user can update template name successfully after opening card
    Given The user opens board
    When The user clicks on card template to open it
    And The user clicks on card title input
    And The user clears the previous name and types new name
    And The user closes the template card they opened before
    Then The user confirms the name is updated successfully
    @TC-1 @regressionTest
    Scenario: Validate that user can update template name successfully after clicking on edit
    Given The user opens board
    When The user clicks on edit card
    And The user clears the previous name and types new name directly
    And The user clicks on Save button
    Then The user confirms the name is updated successfully
    @TC-2 @regressionTest
    Scenario: Validate that user can't update template name with empty name
    Given The user opens board
    When The user clicks on edit card
    And The user clears the previous name
    And The user clicks on Save button
    Then The user confirms the template can't be updated