import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homepage } from '../homepage';
import { repertoireManagementPage } from '../repertoire_management_page';



Given('I open the Matching Engine homepage', () => {
  homepage.visit();

});

When('I expand the {string} section', (sectionName) => {
  if (sectionName === 'Modules') {
    homepage.expandModules();
  }
});

When('I click on the {string}', (moduleName) => {
  if (moduleName === 'Repertoire Management Module') {
    homepage.clickRepertoireManagement();
  }
});

When('I scroll to the {string} section', (sectionName) => {
  if (sectionName === 'Additional Features') {
    repertoireManagementPage.scrollToAdditionalFeatures();
  }
});

When('I click {string}', (linkText) => {
  if (linkText === 'Products Supported') {
    repertoireManagementPage.clickProductsSupported();
  }
});

Then('I should see the list of supported products under {string}', (headingText) => {
  if (headingText === 'There are several types of Product Supported:') {
    repertoireManagementPage.assertSupportedProducts();
  }
});



