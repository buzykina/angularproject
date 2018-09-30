import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Employees } from './mock-employees';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

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

addEmployee(depId,fname,lname,dob): void {
  let o = {id: 0, department_id: depId, last_name:lname, first_name: fname, birth_date: dob, show: false, modify: false };
  this.http.post(this.URL,o, httpOptions).subscribe(null, (p) => this.messageService.add('EmployeeService: problem with adding employee'), () => this.messageService.add('EmployeeService: employee with id '+o.id+' was added') );
  this.employees.push(o);
}
delete(i): void{
  const url = `${this.URL}?id=${i}`;
  console.log(url);
	 this.http.delete(url, httpOptions).subscribe(null, (p) => this.messageService.add('EmployeeService: a problem with deleting employee with id '+ i), () => this.messageService.add('EmployeeService: employee with id '+ i +' was deleted') );
   this.getEmployees();
   this.employees.filter(x => x.id == i);
}
view(i): void{
	this.messageService.add('EmployeeService: employee with id '+ i +' was viewed');
}
modify(i): void{
	this.messageService.add('EmployeeService: employee with id '+ i +' was modified');
}
searchEmployees(term: string): Observable<Employee[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Employee[]>(`${this.URL}/?id=${term}`).pipe(
    tap(_ => this.messageService.add(`found employees matching "${term}"`)),
    catchError(this.handleError<Employee[]>('searchEmployees', []))
  );
}
}
