import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 
  	tasks: Task[];
  
    addATask: Boolean = false;

  	selectedTask : Task;

constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
   this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }

   onSelect(task: Task) : void {
    this.selectedTask = task;
    this.selectedTask.show = false;
    this.selectedTask.Modify = false;
    this.addATask = false;
    
   }

  view() : void {
    this.selectedTask.show = true;
    this.selectedTask.Modify = false;
    this.addATask = false;
    this.taskService.view(this.selectedTask.id);
  }

  modify() : void {
    this.selectedTask.show = false;
    this.selectedTask.Modify = true;
    this.addATask = false;
    this.taskService.modify(this.selectedTask.id);
  }

  add1() : void {
    this.addATask = true;
    if (this.selectedTask != null)
    {
      this.selectedTask.show = false;
      this.selectedTask.Modify = false;
    }

  }

  delete() : void {
    this.taskService.delete(this.selectedTask.id);
    this.selectedTask = null;
  }

  addTask(ID,Name): void {
    this.taskService.addTask(ID,Name);
  }





















  
}


  


  
 
