

describe('validate email for Signup Functionality', () => {
  
  it(' validate email for signup', () => {
    cy.visit("https://dev-fe.buttonshift.com/")
    cy.get('.css-m7nve9 > .MuiButton-contained').click()
    cy.get("#mui-2").type("sidharathkumar9764@@@@@gmailllllll.com")
  
    
    cy.get("button[type='submit']").click()
    cy.get('#mui-2-helper-text').contains('Please enter a valid email address')

    
 
})



 







})