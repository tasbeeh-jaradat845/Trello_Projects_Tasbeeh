Feature: Create template functionality
    @TC-0 @smokeTest
    Scenario: Validate user can create card template successfully
    Given The user opens board
    When The user clicks on template card icon
    And The user clicks on Create new template button
    And The user types the name of the template
    And The user clicks on Add button
    Then Card template is created successfully

    @TC-1 @regressionTest
    Scenario: Validate user can't create card template without title
    Given The user opens board
    When The user clicks on template card icon
    And The user clicks on Create new template button
    And The user clicks on Add button
    Then Card template is not created