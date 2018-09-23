import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Employees } from './mock-employees';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private employees:Employee[];
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
  private URL = 'http://i875395.hera.fhict.nl/api/392854/employee';
  constructor(private messageService: MessageService,private http: HttpClient) {
     this.http.get<Employee[]>(this.URL).subscribe(data => this.employees = data);
   }
  getEmployees(): Observable<Employee[]> {
  this.messageService.add('EmployeeService: get an employee');
  return this.http.get<Employee[]>(this.URL).pipe(
      catchError(this.handleError('getEmployees', []))
    );
}
 getEmployee(id: number): Observable<Employee> {
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);
    return of(this.employees.find(Employee => Employee.id === id));
  }
index(): number
{
	var max = -1;
	for (var i = 0; i < this.employees.length; ++i) 
	{
		if(max < this.employees[i].id)
		{
			max = this.employees[i].id;
		}
	}
	return max+1;
}
addEmployee(depId,fname,lname,dob): void {
	var id = this.index();
	console.log(id);
  this.employees.push( {id: id, department_id: depId, last_name:lname, first_name: fname, birth_date: dob, show: false, modify: false } );
  this.messageService.add('EmployeeService: employee with id '+id+' was added');
}
delete(i): void{
	for (var k = 0; k < this.employees.length; ++k) 
	{
		if(i == this.employees[k].id)
		{
			this.employees.splice(k,1);
		}
	}
	this.messageService.add('EmployeeService: employee with id '+ i +' was deleted');
}
view(i): void{
	this.messageService.add('EmployeeService: employee with id '+ i +' was viewed');
}
modify(i): void{
	this.messageService.add('EmployeeService: employee with id '+ i +' was modified');
}
}
