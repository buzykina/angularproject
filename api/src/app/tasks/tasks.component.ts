import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TASKS} from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 
  	tasks = TASKS;
    variable = false;

  	selectedTask : Task;

  	onSelect(task : Task) {
  		this.selectedTask = task;
      this.selectedTask.show = false;
      this.selectedTask.Modify = false;
  	}
  
constructor() { }
  
  ngOnInit() {

  }

  addTask(ID,Name,) {
    this.tasks.push ({id: ID, name: Name, Modify: false, show: false});
  }  

  delete(i) {
   let arr = this.tasks; 
   i.show = false;
   i.modify = false;
   arr = arr.filter( (x) => x != i);
   this.tasks = arr;
   this.selectedTask = null;
  }

}


  


  
 
