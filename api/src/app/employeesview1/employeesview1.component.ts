import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeesview1',
  templateUrl: './employeesview1.component.html',
  styleUrls: ['../employees/employees.component.css']
})
export class Employeesview1Component implements OnInit {
  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
