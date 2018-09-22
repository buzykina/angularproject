import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	employees: Employee[] = [];
  tasks: Task[] = [];

  constructor(private employeeService: EmployeeService, private taskService : TaskService) { }

  ngOnInit() {
  	this.getEmployees();
    this.getTasks();
  }
    getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(0, 3));
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks.slice(0,6));
  }
}
