import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent 
implements OnInit {
	employees: Employee[];
	selectedEmployee: Employee;
  add: Boolean = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  this.getEmployee();
  }
  getEmployee(): void {
  this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
}

addEmployee(id,fname,lname,gender,dob)
{
  this.employees.push( {id: id, lastname:lname, firstname: fname, gender: gender, birthday: dob, show: false, modify: false } );
  this.add = false;
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
