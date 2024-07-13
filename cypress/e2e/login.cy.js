

describe('login', () => {
  
  it('verify login functionality ', () => {
    cy.visit("https://dev-fe.buttonshift.com/")
    cy.get('.css-m7nve9 > .MuiButton-text').click()
    cy.get("#mui-2").type("sidharathkumar976@gmail.com")
    cy.get("button[type='submit']").click()
    cy.get("#mui-3").type("Pitu@1234")
    cy.get('[data-cy="auth-login-button"]').click()
 


cy.get(".MuiFab-colorInherit > .MuiBox-root > .MuiAvatar-root").click()
  cy.get("button[aria-label='Logout']").click()


  
  })



 







})