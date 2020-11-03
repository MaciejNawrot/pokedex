describe('main test', () => {
  it('go to /dashboard', () => {
    cy.visit('http://localhost:4200');
  });

  it('contains app wrapper', () => {
    cy.get('.wrapper');
  });

  it('click card', () => {
    cy.get('img').first().click();
  });

  it('has details', () => {
    cy.get('.details-container')
    cy.contains(/d/);
  });

  it('img rendered', () => {
    cy.get('img').should('be.visible');
  });

  it('back to dashboard', () => {
    cy.get('nav').should('be.visible');
    cy.get('nav').children().children().click()
  })
});
