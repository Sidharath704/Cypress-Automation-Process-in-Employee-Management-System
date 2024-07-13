

describe('validate password requirement for Signup Functionality', () => {
  
  it(' validate password requirement for signup', () => {
    cy.visit("https://dev-fe.buttonshift.com/")
    cy.get('.css-m7nve9 > .MuiButton-contained').click()
    cy.get("#mui-2").type("sidharathkumar976@gmail.com")
    cy.get("button[type='submit']").click()
  

   cy.get('[data-cy="auth-password-input"]').type("dbuhfhsfdsfh")
   cy.get('[data-cy="auth-login-button"]').click()

   cy.get('#mui-3-helper-text').contains('Unable to log in with provided credentials')
   

    
 
})



 







})