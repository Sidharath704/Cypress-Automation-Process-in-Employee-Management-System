import Employee from "../PageObjects/EmployeePage"
describe('Employee Crud Project', () => {

    it('Employee Crud', () => {
 
      const addEmployee = new Employee();
      addEmployee.homePage();
      addEmployee.clickAddToEmployee();
      addEmployee.username();
      addEmployee.DateOfBirth();
      addEmployee.salary();
      addEmployee.joiningDate();
    //  addEmployee.relievingDate();
      addEmployee.contact();
      addEmployee.status();
      addEmployee.clickOnSubmit();
      addEmployee.clickOnEdit();
      addEmployee.updateName();
      addEmployee.updateDateOfBirth();
      addEmployee.updateSalary();
      addEmployee.updateJoiningDate();
     // addEmployee.updateRelievingDate();
     addEmployee.updateContact();
     addEmployee.updateStatus();
     addEmployee.updateSubmit();
     addEmployee.clickOnDelete();
      
    })
   
})