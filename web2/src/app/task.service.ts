import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Departments } from './departmentsList';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private taskUrl = 'http://i875395.hera.fhict.nl/api/392854/task';

  constructor(private http: HttpClient,private messageService: MessageService) { }

  private log(message: string)
  {
    this.messageService.add(`TaskService: ${message}`);
  }

  getTasks(): Observable<Task[]> {
  	this.messageService.add('Tasks added! Choose one!');
  		//return of (TASKS);

    return this.http.get<Task[]>(this.taskUrl)
      .pipe(
        catchError(this.handleError('getTasks', []))
      );
  }

  getTask(id: number): Observable<Task> {
  	this.messageService.add(`TaskService: fetched task id=${id}`);
    //return of(TASKS.find(task => task.id === id));

    const url = `${ this.taskUrl }/${ id }`;
    return this.http.get<Task>(url).pipe(
      tap(_=> this.log(`fetched task id = ${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  getDepName(): void{
  for (var k = 0; k < Departments.length; ++k) 
    {
      for (var x = 0; x < TASKS.length; ++x)
      {
       
      }
    }
  }

  addTask(ID,Name,depID,empName,deadline) : void {
  	TASKS.push({id: ID, depID: depID, employeeID: [],Employees:[], name: name, deadline: deadline, show:false, Modify: false })
  	this.messageService.add('New task with id' + ID + ' was added');
  }



  view(i) : void {
  	this.messageService.add('Task with the id ' + i + ' was viewed!');
  }

  modify(i) : void {
  	this.messageService.add('Task with the id ' + i + ' was modified!');
  }

  delete(i) : void {
  	this.messageService.add('The task with the id ' + i + ' has been deleted successfully!');
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any ) : Observable<T> => {

        //TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead;

        //TODO: better job of transforming errors for user consumption
        this.log(`${operation} failed: ${error.message}`);

        //Let the app keep running by returning an empty result
        return of ( result as T);

    }
  }


}
