import { Component, OnInit } from '@angular/core';
import { Department } from '../Department';
import { Departments } from '../departmentsList';
import { Variables } from '../Department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments = Departments;

  selectedDepartment: Department;

  variables: Variables = {
  add: false
  };

  constructor() { }

  ngOnInit() {
  }

add(id: number,name: string,building: string,nrofemployees: number): void {
	this.departments.push({ id: id, name: name, building: building, nrofemployees:nrofemployees,show: false, modify: false});
	this.variables.add = false;
}

delete(i) { 
 let arr = this.departments; 
 i.show = false;
 i.modify = false;
 arr = arr.filter( (x) => x != i);
 this.departments = arr;
 this.selectedDepartment = null;
} 

onSelect(department: Department): void {
    this.selectedDepartment = department;
} 

}


