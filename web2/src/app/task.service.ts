import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS} from './mock-tasks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service' 

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private messageService: MessageService) { }
  getTasks(): Observable<Task[]> {
  this.messageService.add('Tasks added! Choose one!');
  	return of(TASKS);  
  }

  
  addTask(ID,Name) : void {
  	TASKS.push({id : ID, name : Name, show:false, Modify: false})
  	this.messageService.add('New task with id ' + ID + ' was added');
  }


  view(i) : void {
  	this.messageService.add('Task with the id ' + i + 'was viewed');
  }

  modify(i) : void {
  	this.messageService.add('Task with the id ' + i + 'was modified');
  }

  delete(i) : void {
  	for (var x = 0; x < TASKS.length; ++x)
  	{
  		if (i == TASKS[x].id)
  		{
  			TASKS.splice(x,1);
  		}
  	}
    this.messageService.add('The task with the id ' + i + ' has been deleted successfully!'); 
  }

}
