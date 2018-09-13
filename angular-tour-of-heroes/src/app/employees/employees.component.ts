import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Employees } from '../mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
	employees = Employees;
	selectedEmployee: Employee;
  constructor() { }

  ngOnInit() {
  }
addEmployee(id,fname,lname,gender,dob)
{
console.log(id,fname,lname,gender,dob);
	this.employees.push( {id: id, lastname:lname, firstname: fname, gender: gender, birthday: dob } );
}
 onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
