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

  constructor() { }

  ngOnInit() {
  }
addEmployee(id,fname,lname,gender,dob)
{
console.log(id,fname,lname,gender,dob,show);
	this.employees.push( {id: id, lastname:lname, firstname: fname, gender: gender, birthday: dob, show: false } );
}
 onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
delete(i) { 
 let arr = this.employees; 
 i.show = false;
 arr = arr.filter( (x) => x != i);
 this.employees = arr;
} 
view(selectedEmployee)
{
  console.log(selectedEmployee.show);
  selectedEmployee.show = true;
}

}
