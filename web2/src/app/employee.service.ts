import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Employees } from './mock-employees';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }
  getEmployees(): Observable<Employee[]> {
 	this.messageService.add('EmployeeService: get an employee');
 	return of(Employees);
  }


index(): number
{
	var max = -1;
	for (var i = 0; i < Employees.length; ++i) 
	{
		if(max < Employees[i].id)
		{
			max = Employees[i].id;
		}
	}
	return max+1;
}
addEmployee(depId,fname,lname,dob): void {
	var id = this.index();
  Employees.push( {id: id, depId: depId, lastname:lname, firstname: fname, birthday: dob, show: false, modify: false } );
  this.messageService.add('EmployeeService: employee with id '+id+' was added');
}
delete(i): void{
	for (var k = 0; k < Employees.length; ++k) 
	{
		if(i == Employees[k].id)
		{
			Employees.splice(k,1);
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
