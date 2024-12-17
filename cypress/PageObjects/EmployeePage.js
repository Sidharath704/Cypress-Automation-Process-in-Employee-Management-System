class Employee
{   
    addToEmployee="a[class='inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']"
    name="#name"
    dob="#dob"
    salaryinfo="#salary"
    joiningDateinfo="input[id='joining date']"
    relevingDate="input[value='01/16/2025']"
    contactinfo="#contact"
    statusinfo="#status"
    clickOnSubmitButton="button[class='mt-4 rounded border border-indigo-600 bg-indigo-600 p-3 pe-10 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']"
    clickOnEditButton="a[class='inline-block rounded-3xl border border-indigo-600 px-3 py-1 text-sm font-medium text-black hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500']"
   
    clickOnDeleteButton="button[class='rounded-2xl border bg-white border-red-600 px-2 py-1 text-sm font-medium text-black hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500']"
    homePage()
    {
      
        cy.visit("http://localhost:5173/")
        cy.screenshot("HomePage")
        cy.wait(5000)
    }
   
    clickAddToEmployee()
    {
       cy.get(this.addToEmployee).click();
       cy.screenshot("AddEmployeePage")
       cy.wait(5000)
     
    }
    username()
    {
       cy.get(this.name).type("sidharath")
    }
    DateOfBirth()
    { 
        cy.get(this.dob).clear();
       cy.get(this.dob).type("08/18/2000")
    }
    salary()
    {
        cy.get(this.salaryinfo).clear();
       cy.get(this.salaryinfo).type("20000")
       
    }
    joiningDate()
    {
      
        cy.get(this.joiningDateinfo).clear();
        cy.get(this.joiningDateinfo).type("02/18/2024")
    }
    // relievingDate()
    // {
    //     cy.wait(5000); 
    //     cy.get(relevingDate).clear();
    //     cy.get(relevingDate).type("02/15/2025")
    // }
    contact()
    {
        cy.get(this.contactinfo).type("7404590817")
      
      
    }
    status()
    {
     
        cy.get(this.statusinfo).select('inactive');
        cy.wait(5000)
   
    }
    clickOnSubmit()
    {
         cy.get(this.clickOnSubmitButton).click();
    }

    //update employee record section here

    clickOnEdit()
    {
        cy.wait(5000)
        cy.get(this.clickOnEditButton).click();
        cy.screenshot("EditEmployeePage")
        cy.wait(5000)
    }
    updateName()
    {
        cy.get(this.name).clear()
        cy.get(this.name).type("shiv")
    }
    updateDateOfBirth()
    {
        cy.get(this.dob).clear();
        cy.get(this.dob).type("05/30/2000")

    }
    updateSalary()
    {
        cy.get(this.salaryinfo).clear();
       cy.get(this.salaryinfo).type("50000")
       
    }
    updateJoiningDate()
    {
        cy.wait(5000); 
        cy.get(this.joiningDateinfo).clear();
        cy.get(this.joiningDateinfo).type("05/18/2025")
    }
    // updateRelievingDate()
    // {
    //     cy.wait(5000); 
    //     cy.get(this.relevingDate).clear();
    //     cy.get(this.relevingDate).type("02/15/2025")
    // }
    updateContact()
    { 
        cy.get(this.contactinfo).clear();
        cy.get(this.contactinfo).type("9729892313")
    }
    updateStatus()
    {
     
        cy.get(this.statusinfo).select('active');
  
        cy.wait(5000)
   
    }
    updateSubmit()
    {
        cy.get(this.clickOnSubmitButton).click();
      
       cy.wait(5000)
    }

     //update employee record section here
     
    clickOnDelete()
    {
        cy.screenshot("DeleteEmployeePage")
        cy.wait(5000)
        cy.get(this.clickOnDeleteButton).click();
    }

}
export default Employee;