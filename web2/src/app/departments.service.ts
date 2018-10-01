import { Injectable } from '@angular/core';
import { Department } from './Department';
import { Departments } from './departmentsList';
import { Observable, of } from 'rxjs';
import { Employees } from './mock-employees';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  getDepartments(): Observable<Department[]> {
  	return of(Departments);
  }

  getSpecificDepartment(id: number): Observable<Department> {
    return of(Departments.find(Department => Department.id === id));
  }

  addDepartment(id: number,name: string,building: string,nrofemployees: number): void {
  	Departments.push({id: id, name: name, building:building, nrofemployees: nrofemployees, show: false, modify: false, employeesArr:[] });
  }


	delete(i: number): void{
		for (var k = 0; k < Departments.length; ++k) 
		{
			if(i == Departments[k].id)
			{
				Departments.splice(k,1);
			}
		}
	}

	addEmployeesToDepartments(): void{
		for (var k = 0; k < Departments.length; ++k) 
		{
			for (var x = 0; x < Employees.length; ++x)
			{
				if(Employees[x].department_id == Departments[k].id)
				{
						Departments[k].employeesArr.push({id:Employees[x].id, department_id:Employees[x].department_id,department_name:Employees[x].department_name,last_name:Employees[x].last_name,first_name:Employees[x].first_name,birth_date:Employees[x].birth_date,show:false,modify:false });	
				}
			}
			
		}

	}

	resetEmployees():void{
		for (var k = 0; k < Departments.length; ++k) 
		{
			Departments[k].employeesArr.length = 0; 
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
