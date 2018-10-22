import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Departments } from './departmentsList';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  private tasks:Task[];
  private handleError<T> (operation = 'operation', result?: T) {
 
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.messageService.add(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  
  private myURL = 'http://i392854.hera.fhict.nl/api/tasks';

  constructor(private http : HttpClient, private messageService: MessageService) 
  {  
  }
  
  getTasks(): Observable<Task[]> {
  const myurl = `${this.myURL}/read.php`;
  this.messageService.add('TaskService: get an Task');
  this.http.get<Task[]>(myurl)
    .subscribe(tasks => {
        this.tasks = tasks as Task[];
    });
  return this.http.get<Task[]>(myurl);
}

 getTask(id: number): Task {
    // TODO: send the message _after_ fetching the hero
    for(var k = 0; k < this.tasks.length; ++k)
    {
      if(this.tasks[k].id == id)
      {
      return this.tasks[k];
      }       
    }
    this.messageService.add(`TaskService: fetched Task id=${id}`);

  }

addTask(depID, employeeID, deadline, name): Observable<Task> {
  const url = `${this.myURL}/create.php`;
  let task = {id: 1, depID: depID , department_name:"something",  employeeID: employeeID,employee_name:"chto nebuda", deadline: deadline, name: name};
  console.log(task);
  this.messageService.add('TaskService: new Task was added');
  return this.http.post<Task>(url, task, httpOptions);
}
delete(i): void {
    const url = `${this.myURL}/delete.php`;
  this.http.post(
        url ,
        { id: i },
        httpOptions
    ).subscribe(e => console.log(e));
  this.messageService.add('TaskService: Task with id '+ i +' was deleted');
  console.log(this.tasks);
}

view(i): void{
  this.messageService.add('taskservice: Task with id '+ i +' was viewed');
}
modify(i, depID, employeeID, name, deadline ): void{
  let task = this.getTask(i);
  task.depID = depID;
  task.employeeID = employeeID;
  task.deadline = deadline;
   const url = `${this.myURL}/update.php`;
    this.http.post(
        url,
        task,httpOptions
    ).subscribe(e => console.log(e));
  this.messageService.add('TaskService: Task with id '+ i +' was modified');
}
}


  



