class RepertoireManagementPage {
  scrollToAdditionalFeatures() {
    cy.wait(5000);
    cy.get('section').contains('Additional Features').scrollIntoView();  
  }
  clickProductsSupported() {
    cy.wait(5000);
   cy.contains('Products Supported').click();
  }
 assertSupportedProducts() {
  cy.get('h3').contains('There are several types of Product Supported:', { timeout: 10000 })
  .parent()
  .find('ul', { timeout: 10000 })
  .within(() => {
    const expectedProducts = ['Cue Sheet / AV Work', 'Recording', 'Bundle', 'Advertisement'];
    expectedProducts.forEach((product) => {
      cy.contains(product, { timeout: 10000 }).should('be.visible');
    });
  });

  }
}
  
  export const repertoireManagementPage = new RepertoireManagementPage();
  
