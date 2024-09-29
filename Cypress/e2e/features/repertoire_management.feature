Feature: Repertoire Management Module

  Scenario: Verify supported products under 'Additional Features'
    Given I open the Matching Engine homepage
    When I expand the 'Modules' section
    And I click on the 'Repertoire Management Module'
    And I scroll to the 'Additional Features' section
    And I click 'Products Supported'
    Then I should see the list of supported products under 'There are several types of Product Supported:'
