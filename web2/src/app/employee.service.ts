import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Department } from './department';
import { Employees } from './mock-employees';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import {Departments} from './departmentsList';
import { map, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

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
  
  private myURL = 'http://i392854.hera.fhict.nl/api/employee';

  constructor(private http : HttpClient, private messageService: MessageService) 
  {  
  }
  
  getEmployees(): Observable<Employee[]> {
  const myurl = `${this.myURL}/read.php`;
  this.messageService.add('EmployeeService: get an employee');
  this.http.get<Employee[]>(myurl)
    .subscribe(employees => {
        this.employees = employees as Employee[];
    });
  return this.http.get<Employee[]>(myurl);
}

 getEmployee(id: number): Employee {
    // TODO: send the message _after_ fetching the hero
    for(var k = 0; k < this.employees.length; ++k)
    {
    	if(this.employees[k].id == id)
    	{
			return this.employees[k];
    	}				
    }
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);

  }

addEmployee(depId,fname,lname,dob): Observable<Employee> {
  const url = `${this.myURL}/create.php`;
  let employee = {id: 1, first_name: fname,department_name:"something", department_id: depId, last_name: lname, birth_date:dob};
  console.log(employee);
  this.messageService.add('EmployeeService: new employee was added');
  return this.http.post<Employee>(url, employee, httpOptions);
}
delete(i): void {
    const url = `${this.myURL}/delete.php`;
	this.http.post(
        url ,
        { id: i },
        httpOptions
    ).subscribe(e => console.log(e));
	this.messageService.add('EmployeeService: employee with id '+ i +' was deleted');
	console.log(this.employees);
}

view(i): void{
	this.messageService.add('EmployeeService: employee with id '+ i +' was viewed');
}
modify(i,fname,lname,dob): void{
	let employee = this.getEmployee(i);
	employee.first_name = fname;
	employee.last_name = lname;
	employee.birth_date = dob;
	 const url = `${this.myURL}/update.php`;
    this.http.post(
        url,
        employee,httpOptions
    ).subscribe(e => console.log(e));
	this.messageService.add('EmployeeService: employee with id '+ i +' was modified');
}
}
