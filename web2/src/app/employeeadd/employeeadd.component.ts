import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeesComponent } from '../employees/employees.component';
@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['../employees/employees.component.css']
})
export class EmployeeaddComponent implements OnInit {
 @Input() employee: Employee;


  constructor(private employeeService: EmployeeService, private empComponent: EmployeesComponent) { }

  ngOnInit() {
  }
  addEmployee(depId,fname,lname,dob): void {
  console.log(depId,fname,lname,dob);
  this.empComponent.add = false;
  this.employeeService.addEmployee(depId,fname,lname,dob).subscribe(x => {this.empComponent.employees.push(x); console.log(x);});
}
onCancel() {
    this.empComponent.add = false;
  }
}
