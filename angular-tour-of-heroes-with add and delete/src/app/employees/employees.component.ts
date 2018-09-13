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
  constructor() { }

  ngOnInit() {
  }

}
