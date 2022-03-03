// Create an employee class object array

let Employee = [
    {born_year: 1995, salary: 20000 , Designation: 'programmer'},
    {born_year: 1998, salary: 21000 , Designation: 'Tester'},
    {born_year: 1992, salary: 22000 , Designation: 'manager'},
    {born_year: 1999, salary: 25000 , Designation: 'designer'}, 
];

//////////////////////////////////////////////////////////////////////////////////////////////////

// Find all the employees born after 1995 and store them in array using map() function

let emp1 = Employee.map(emp1 => emp1.born_year >= 1995);
console.log(emp1);

//////////////////////////////////////////////////////////////////////////////////////////

// Iterate over employee array to find the sum of salaries of all employees

const salary = 0;
let totalSalary = Employee.reduce((prev,current)=>
 { 
     return {salary:prev.salary +current.salary};
})

console.log(totalSalary);

////////////////////////////////////////////////////////////////////////////////

// Find the first employee in the array whose designation is manager

let emp2 = Employee.find(emp2 => emp2.Designation === "manager");
console.log(emp2);
