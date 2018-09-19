import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['../employees/employees.component.css']
})
export class EmployeeaddComponent implements OnInit {
 @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
