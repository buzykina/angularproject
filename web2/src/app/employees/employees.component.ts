import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent 
implements OnInit {
	employees: Employee[];
	selectedEmployee: Employee;
  add: Boolean = false;
  modify1: Boolean = false;
  id: number = 0;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  this.getEmployee();
  }
  getEmployee(): void {
  this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
}

 view()
 {
   this.add = false;
   this.employeeService.view(this.selectedEmployee.id);
 }
delete(id) { 
 this.employeeService.delete(id);
  for (var k = 0; k < this.employees.length; ++k) 
  {
    if(id == this.employees[k].id)
    {
      this.employees.splice(k,1);
    }
  }
} 
add1():void{
this.add =true;
this.modify1 = false;
}
modify(id: number)
{
  this.add = false;
  this.modify1 = true;
  console.log(id);
  this.id = id;  
  this.selectedEmployee = this.employeeService.getEmployee(id);
  console.log(this.selectedEmployee);
}
onSelect(department: Employee): void {
    this.selectedEmployee = department;
} 
}
