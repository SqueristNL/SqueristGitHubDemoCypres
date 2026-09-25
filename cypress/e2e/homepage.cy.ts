describe('homepage', () => {
  it('toont Squerist titel en heading', () => {
    cy.visit('/');

    cy.title().should('match', /Squerist/i);
    cy.contains('h1, h2, h3, h4, h5, h6, [role="heading"]', /Squerist/i).should('be.visible');
  });
});
