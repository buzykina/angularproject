import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
import { TaskService } from '../task.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 
  	tasks: Task[] = [];
    variable = false;

  	selectedTask : Task;

    add: boolean = false;

  	onSelect(task : Task) {
  		this.selectedTask = task;
      this.selectedTask.show = false;
      this.selectedTask.Modify = false;
  	}
  
constructor(private taskService: TaskService) { }
  
  ngOnInit() {
  this.getTasks();
  }


  view() : void {
    this.selectedTask.show = true;
    this.selectedTask.Modify = false;
    this.add = false;
    this.taskService.view(this.selectedTask.id);
  }

  modify() : void {
    this.selectedTask.show = false;
    this.selectedTask.Modify = true;
    this.add = false;
    this.taskService.modify(this.selectedTask.id);
  }

  add1() : void {
    this.add = true;
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



  addTask(ID,Name, depID, employeeName, deadline) {
    this.tasks.push ({id: ID, depID: depID, employeeID: [],Employees:[],name: Name, deadline: deadline, Modify: false, show: false});
  }  

  getTasks():void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}


  


  
 
