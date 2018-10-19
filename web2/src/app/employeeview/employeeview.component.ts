import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee }         from '../employee';
import { EmployeeService }  from '../employee.service';
@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['../employees/employees.component.css']
})
export class EmployeeviewComponent implements OnInit {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployee(id);
  }

  goBack(): void {
    this.location.back();
  }
}

