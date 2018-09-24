import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Task } from '../task';
import { TaskService } from '../task.service';

import { DepartmentsService } from '../departments.service';
import { Department } from '../Department';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	employees: Employee[] = [];
    tasks: Task[] = [];
  constructor(private employeeService: EmployeeService, private departmentsService: DepartmentsService, private taskService : TaskService) { }

  departments: Department[] = [];

  ngOnInit() {
  	this.getEmployees();
    this.getDepartments();
    this.getTasks();
>>>>>>> master
  }
    getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(0, 3));
  }

<<<<<<< HEAD
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks.slice(0,6));
=======
  getDepartments(): void{
  this.departmentsService.getDepartments()
    .subscribe(Departments => this.departments = Departments);
>>>>>>> master
  }
}
