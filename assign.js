class Employee {
    constructor(name,designation,salary,birthdate){
        this.Ename = name;
        this.Edesignation = designation;
        this.Esalary = salary;
        this.Ebirthdate = birthdate;
    }
    name(){
        console.log(this.name);
    }
    EmployeeDetails(){
        console.log(`${this.name} ${this.designation} ${this.salary} ${this.birthdate}`);
    }
}

class Manager extends Employee{
    constructor(salary){
        super(salary)
        this.Msalary = salary;
    }
}
  let emp = new Employee('Akki','programmer',21000,'15/08/1998');
// emp.name();
console.log(emp);

let man = new Manager('abc',25000);
console.log(man);







// const emp = new Employee('adm','programmer',21000,15/08/1998);
// // console.log(emp,name());
// console.log(emp.EmployeeDetails());
// // console.log(emp);

