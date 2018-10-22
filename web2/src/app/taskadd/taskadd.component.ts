import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TasksComponent } from '../tasks/tasks.component';


@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['../tasks/tasks.component.css']
})
export class TaskaddComponent implements OnInit {
@Input() task: Task;

  constructor(private taskService: TaskService, private taskComponent: TasksComponent) { }

  ngOnInit() {
  }

  addTask(depID,employeeid,Name,deadline) : void {
  	console.log("aa");
    this.taskComponent.add = false;
    this.taskService.addTask(depID,employeeid,deadline, Name).subscribe(x => {this.taskComponent.tasks.push(x); console.log(x);})
  }
  onCancel() {
    this.taskComponent.add = false;
  }

}
