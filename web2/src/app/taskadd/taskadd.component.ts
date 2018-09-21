import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {
@Input() task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(ID,Name) : void {
  	this.taskService.addTask(ID, Name);
  }

  
}
