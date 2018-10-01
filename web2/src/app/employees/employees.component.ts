import { Component, OnInit } from '@angular/core';
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
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  this.getEmployee();
  }
  getEmployee(): void {
  this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
}

 onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.selectedEmployee.modify = false;
    this.selectedEmployee.show = false;
  }
 view()
 {
   this.selectedEmployee.show = true; 
   this.selectedEmployee.modify = false; 
   this.add = false;
   this.employeeService.view(this.selectedEmployee.id);
 }
delete() { 
 this.employeeService.delete(this.selectedEmployee.id);
 this.selectedEmployee = null;
} 
add1():void{
this.add =true;
if(this.selectedEmployee != null)
{
  this.selectedEmployee.modify = false;
    this.selectedEmployee.show = false;
}
}
modify()
{
  this.selectedEmployee.modify = true; 
  this.selectedEmployee.show = false; 
  this.add = false;
  this.employeeService.modify(this.selectedEmployee.id);
}
}
