class Employee {
    constructor(name,designation,salary,birthdate){
        this.name = name;
        this.designation = designation;
        this.salary = salary;
        this.birthdate = birthdate;
    }
    Details(){
        console.log("hello, ",this.name);
        console.log("Your are : ", this.designation);
        console.log("your Salary is : " ,this.salary);
        console.log("Your DOB :" ,this.birthdate);
    }
}

class Manager extends Employee {
    constructor(name,designation,salary,birthdate) {
        super(name,designation,salary,birthdate);
        // this.birthdate = birthdate;
    }
        managerDetails(){
            super.Details();
        }
    }


class Helper extends Employee {
    constructor(name,designation,salary,birthdate) {
        super(name,designation,salary,birthdate);
       
    }
    helperDetails(){
        super.Details();
    }
}


class Clerk extends Employee {
    constructor(name,designation,salary,birthdate) {
        super(name,designation,salary,birthdate);
        
    }
    clerkDetails(){
        super.Details();
    }
}


// let emp = new Employee('pqr','programmer',20000,'15/08/1998');
// console.log(emp);


 let Man = new Manager('abc','Manager',21000,'10/08/1998');
// console.log(Man);
Man.managerDetails();

let help =new Helper('xyz','Helper',15000,'16/02/1990');
// console.log(help);
help.helperDetails();

let clr = new Clerk('axz','clerk',18000,'10/10/1991');
// console.log(clr);
clr.clerkDetails();




///////////////////////////////////////////////////////////////////////////////////

