import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Employees } from '../mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent 
implements OnInit {
	employees = Employees;
	selectedEmployee: Employee;
  add: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
addEmployee(id,fname,lname,gender,dob)
{
  this.employees.push( {id: id, lastname:lname, firstname: fname, gender: gender, birthday: dob, show: false, modify: false } );
  add = false;
}
 onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.selectedEmployee.modify = false;
    this.selectedEmployee.show = false;
  }
delete(i) { 
 let arr = this.employees; 
 i.show = false;
 i.modify = false;
 arr = arr.filter( (x) => x != i);
 this.employees = arr;
 this.selectedEmployee = null;
} 
}
