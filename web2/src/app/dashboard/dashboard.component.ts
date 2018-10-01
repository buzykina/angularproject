import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentsService } from '../departments.service';
import { Department } from '../Department';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private departmentsService: DepartmentsService, private taskService: TaskService) { }

  departments: Department[] = [];
<<<<<<< HEAD
  departmentsSearch: Department[] = [];
  employeesSearch: Employee[] = [];

=======
  tasks: Task[] = [];
>>>>>>> 77f9a5c208730960039c6f58c4a259a70b7c0949

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

<<<<<<< HEAD
  searchdepartment(term: string): void{
  this.departmentsService.searchDepartments(term)
    .subscribe(Departments => this.departmentsSearch = Departments);
  }

  searchEmployees(term: string): void{
  this.departmentsService.searchEmployees(term)
    .subscribe(Employees => this.employeesSearch = Employees);
=======
  getTasks():void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
>>>>>>> 77f9a5c208730960039c6f58c4a259a70b7c0949
  }
}
