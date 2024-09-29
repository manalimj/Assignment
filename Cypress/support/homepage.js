class HomePage {
    visit() {
      cy.visit('https://www.matchingengine.com/');
      cy.wait(2000);
    }
     expandModules() {
        cy.get('[id="navMenu"]').contains('Modules').click();
        cy.wait(2000);
      }
    
      clickRepertoireManagement() {
        cy.wait(2000);
       cy.xpath('//a[@class="navbar-link is-active"]').click();
      

        cy.wait(6000);
        cy.xpath('//a[@data-vc-container=".vc_tta"]//span[@class="vc_tta-title-text"][normalize-space()="Repertoire Management"]').click();
        cy.visit('https://www.matchingengine.com/repertoire-management-module/')  
    
      }
    }
  export const homepage = new HomePage();
    