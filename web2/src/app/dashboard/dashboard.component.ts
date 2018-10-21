import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentsService } from '../departments.service';
import { Department } from '../department';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private departmentsService: DepartmentsService, private taskService: TaskService) { }

  departments: Department[] = [];
  departmentsSearch: Department[] = [];
  employeesSearch: Employee[] = [];
  tasks: Task[] = [];

  ngOnInit() {
  	this.getEmployees();
    this.getDepartments();
    this.getTasks();
  }
    getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(0, 3));
  }

  getDepartments(): void{
  this.departmentsService.getDepartments()
    .subscribe(Departments => this.departments = Departments);
  }
  searchdepartment(term: string): void{
  this.departmentsService.searchDepartments(term)
    .subscribe(Departments => this.departmentsSearch = Departments);
  }

  searchEmployees(term: string): void{
  this.departmentsService.searchEmployees(term)
    .subscribe(Employees => this.employeesSearch = Employees);
  }
  getTasks():void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
}
