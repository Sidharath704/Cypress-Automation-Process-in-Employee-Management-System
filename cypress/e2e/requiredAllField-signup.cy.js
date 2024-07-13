

describe('required all field for Signup Functionality', () => {
  
  it('Required All field for signup', () => {
    cy.visit("https://dev-fe.buttonshift.com/")
    cy.get('.css-m7nve9 > .MuiButton-contained').click()
    cy.get("button[type='submit']").click()
    cy.get('#mui-2-helper-text').contains('Email is required')
    
 
})



 







})