import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-employeemodify',
  templateUrl: './employeemodify.component.html',
  styleUrls: ['../employees/employees.component.css']
})

export class EmployeemodifyComponent implements OnInit {
@Input() employee: Employee;
  constructor(private employeeService: EmployeeService, private employeeComponent: EmployeesComponent) { }

  ngOnInit() {
  }
  modify(id,fname,lname,dob): void{
  	this.employeeComponent.modify1 = false;
  	this.employeeService.modify(id,fname,lname,dob);
  }
   onCancel() {
    this.employeeComponent.modify1 = false;
  }

}
