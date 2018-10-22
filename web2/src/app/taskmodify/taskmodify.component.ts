import { Component, OnInit,Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-taskmodify',
  templateUrl: './taskmodify.component.html',
  styleUrls: ['../tasks/tasks.component.css']
})
export class TaskmodifyComponent implements OnInit {
@Input() task: Task;
  constructor(private taskService: TaskService, private taskComponent: TasksComponent) { }

  ngOnInit() {
  }
  modify(id,depID,employeeID,name,deadline): void{
  	this.taskComponent.modify1 = false;
  	this.taskService.modify(id,depID,employeeID,name,deadline);
  }
   onCancel() {
    this.taskComponent.modify1 = false;
  }

}
