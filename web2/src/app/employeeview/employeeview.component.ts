import { Component, OnInit, Input} from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['../employees/employees.component.css']
})
export class EmployeeviewComponent implements OnInit {
@Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
