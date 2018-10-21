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
  First_Name: string;
  First_Name_Asc: boolean;
  Id: string;
  Id_Asc: boolean;
  Last_Name: string;
  Last_Name_Asc: boolean;
  Department_Name: string;
  Department_Name_Asc: boolean;
  id: number = 0;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  this.getEmployee();
  this.First_Name = "First Name";
  this.First_Name_Asc = true;
  this.Id = "#";
  this.Id_Asc = true;
  this.Last_Name = "Last Name";
  this.Last_Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
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
sortbyFirstName(): void{
  this.Id = "#";
  this.Id_Asc = true;
  this.Last_Name = "Last Name";
  this.Last_Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
  if(this.First_Name_Asc == true)
  {
    this.First_Name = "First Name ↑";
    this.First_Name_Asc = false;
    this.employees.sort(function(a: Employee, b:Employee){
      if(a.first_name.toLowerCase() < b.first_name.toLowerCase()) return -1;
      if(a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
      return 0;
    });
  }
  else 
  {
    this.First_Name = "First Name ↓";
    this.First_Name_Asc = true;
    this.employees.sort(function(a: Employee, b:Employee){
      if(a.first_name.toLowerCase() < b.first_name.toLowerCase()) return 1;
      if(a.first_name.toLowerCase() > b.first_name.toLowerCase()) return -1;
      return 0;
    });
  }
}
sortbyLastName(): void{
  this.Id = "#";
  this.Id_Asc = true;
  this.First_Name = "First Name";
  this.First_Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
  if(this.Last_Name_Asc == true)
  {
    this.Last_Name = "Last Name ↑";
    this.Last_Name_Asc = false;
    this.employees.sort(function(a: Employee, b:Employee){
      if(a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
      if(a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
      return 0;
    });
  }
  else 
  {
    this.Last_Name = "Last Name ↓";
    this.Last_Name_Asc = true;
    this.employees.sort(function(a: Employee, b:Employee){
      if(a.last_name.toLowerCase() < b.last_name.toLowerCase()) return 1;
      if(a.last_name.toLowerCase() > b.last_name.toLowerCase()) return -1;
      return 0;
    });
  }
}
sortbyDepartmentName(): void{
  this.Id = "#";
  this.Id_Asc = true;
  this.First_Name = "First Name";
  this.First_Name_Asc = true;
  this.Last_Name = "Last Name";
  this.Last_Name_Asc = true;
  if(this.Department_Name_Asc == true)
  {
    this.Department_Name = "Department Name ↑";
    this.Department_Name_Asc = false;
    this.employees.sort(function(a: Employee, b:Employee){
      if(a.department_name.toLowerCase() < b.department_name.toLowerCase()) return -1;
      if(a.department_name.toLowerCase() > b.department_name.toLowerCase()) return 1;
      return 0;
    });
  }
  else 
  {
    this.Department_Name = "Department Name ↓";
    this.Department_Name_Asc = true;
    this.employees.sort(function(a: Employee, b:Employee){
      if(a.department_name.toLowerCase() < b.department_name.toLowerCase()) return 1;
      if(a.department_name.toLowerCase() > b.department_name.toLowerCase()) return -1;
      return 0;
    });
  }
}
sortbyId(): void{
  this.Last_Name = "Last Name";
  this.Last_Name_Asc = true;
  this.First_Name = "First Name";
  this.First_Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
  if(this.Id_Asc == true)
  {
    this.Id = "# ↑";
    this.Id_Asc = false;
    this.employees.sort();
  }
  else 
  {
    this.Id = "# ↓";
    this.Id_Asc = true;
    this.employees.sort().reverse();
  }
}

}
