import { Injectable } from '@angular/core';
import { Department } from './department';
import { Departments } from './departmentsList';
import { Observable, of } from 'rxjs';
import { Employees } from './mock-employees';
import { Employee } from './employee';
import {MessageService} from './message.service';
import { map, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EmployeeService } from './employee.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DepartmentsService {

  private departments:Department[];
  private employees: Employee[];
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

private myURL = 'http://i395601.hera.fhict.nl/API/departments';

constructor(private http : HttpClient, private messageService: MessageService, private employeeService: EmployeeService) { }

  getDepartments(): Observable<Department[]> {
  	const myurl = `${this.myURL}/department/read.php`;
  	this.messageService.add('DepartmentsService: Getting Departments');
  	this.http.get<Department[]>(myurl).subscribe(departments => {this.departments = departments as Department[];});
  	return this.http.get<Department[]>(myurl);
  }

  getSpecificDepartment(id: number): Department {

    for(var k = 0; k < this.departments.length; ++k)
    {
    	if(this.departments[k].id == id)
    	{
    		this.messageService.add(`DepartmentService: fetched department id=${id}`);
			return this.departments[k];
    	}				
    }   
  }

  addDepartment(namee: string,buildingg: string): void {
  		const url = `${this.myURL}/department/create.php`;
  		let d = {name:namee, building:buildingg};
  		this.http.post<Department>(url,d,httpOptions).subscribe(res =>  console.log(res));
  		this.messageService.add('DepartmentsService: new department was added');
  		this.departments.length = 0;
  		this.getDepartments();
  }


	delete(i: number): void{
    let d = {id:i};
		const url = `${this.myURL}/department/delete.php`;
		this.http.post<Department>(url,d,httpOptions).subscribe(res =>  console.log(res));;
		this.messageService.add('EmployeeService: Department with id '+ i +' was deleted');
    this.departments.length = 0;
    this.getDepartments();
	}

  modifyDepartment(idd,namee,buildingg):void{

    let department = this.getSpecificDepartment(idd);
    department.name = namee;
    department.building = buildingg;

    console.log(department);

    const url = `${this.myURL}/department/update.php`;
    this.http.post<Department>(url,{id:idd,name:namee,building:buildingg},httpOptions).subscribe(res =>  console.log(res));
      this.messageService.add('DepartmentsService: Department was edited');
      this.departments.length = 0;
      this.getDepartments();
  }

	addEmployeesToDepartments(): void{

    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);

    console.log(this.employees[1].id);

    this.getDepartments()
    .subscribe(departments => this.departments = departments);

		for (var k = 0; k < this.departments.length; ++k) 
		{
			for (var x = 0; x < this.employees.length; ++x)
			{
				if(this.employees[x].department_name == this.departments[k].name)
				{
						this.departments[k].employeesArr.push({id:this.employees[x].id, department_id:this.employees[x].department_id,department_name:this.employees[x].department_name,last_name:this.employees[x].last_name,first_name:this.employees[x].first_name,birth_date:this.employees[x].birth_date });
				}
			}
			
		}

	}

	resetEmployees():void{
		for (var k = 0; k < this.departments.length; ++k) 
		{
			this.departments[k].employeesArr.length = 0; 
		}
	}

	searchDepartments(term: string): Observable<Department[]> {

	 	if (!term.trim()) {
	    return of([]);
	    }

		return of(Departments.filter( x => x.name.startsWith(term)));

	}

	searchEmployees(term: string): Observable<Employee[]> {

	 	if (!term.trim()) {
	    return of([]);
	    }

		return of(Employees.filter( x => x.first_name.startsWith(term)));

	}
}