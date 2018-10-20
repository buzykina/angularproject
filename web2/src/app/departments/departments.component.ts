import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Variables } from '../department';
import { DepartmentsService } from '../departments.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];
  

  selectedDepartment: Department;

  variables: Variables = {
  add: false
  };

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit() {
  this.getDepartments();
  this.departmentsService.resetEmployees();
  this.departmentsService.addEmployeesToDepartments();
  }

delete(i) {  
 this.departmentsService.delete(this.selectedDepartment.id);
 this.selectedDepartment = null;
} 

onSelect(department: Department): void {
    this.selectedDepartment = department;
} 

getDepartments(): void{
  this.departmentsService.getDepartments()
    .subscribe(Departments => this.departments = Departments);
}

}


