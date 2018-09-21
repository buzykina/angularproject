import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentsService } from '../departments.service';
import { Department } from '../Department';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private departmentsService: DepartmentsService) { }

  departments: Department[] = [];

  ngOnInit() {
  	this.getEmployees();
    this.getDepartments();
  }
    getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(0, 3));
  }

  getDepartments(): void{
  this.departmentsService.getDepartments()
    .subscribe(Departments => this.departments = Departments);
  }
}
