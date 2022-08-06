it('Index', () => {
  cy.visit('/')
  cy.url().should('include', '/')
})
