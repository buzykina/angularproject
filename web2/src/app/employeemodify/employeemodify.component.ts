import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-employeemodify',
  templateUrl: './employeemodify.component.html',
  styleUrls: ['../employees/employees.component.css']
})
export class EmployeemodifyComponent implements OnInit {
@Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
