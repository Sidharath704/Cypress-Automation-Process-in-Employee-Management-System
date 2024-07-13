

describe('Signup Functionality', () => {
  
  it('Register new user', () => {
    cy.visit("https://dev-fe.buttonshift.com/")
    cy.get('.css-m7nve9 > .MuiButton-contained').click()
    cy.get("#mui-2").type("sidharathkumar976@gmail.com")
    cy.get("button[type='submit']").click()
    cy.get(".MuiInput-root.MuiInput-underline.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-adornedEnd.css-14zrqjl").type("Pitu@1234")
    cy.get('[data-cy="auth-login-button"]').click()


 
    // cy.get(".MuiAvatar-root.MuiAvatar-rounded.MuiAvatar-colorDefault.css-1tbszi").click
 
})



 







})