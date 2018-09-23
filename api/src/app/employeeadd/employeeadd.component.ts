import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['../employees/employees.component.css']
})
export class EmployeeaddComponent implements OnInit {
 @Input() employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  addEmployee(depId,fname,lname,dob): void {
  this.employeeService.addEmployee(depId,fname,lname,dob);
}
}
