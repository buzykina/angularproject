import { Component, OnInit } from '@angular/core';
import { Department } from '../Department';
import { Departments } from '../departmentsList';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments = Departments;

  constructor() { }

  ngOnInit() {
  }

add(id: number,name: string,building: string,nrofemployees: number): void {
	this.departments.push({ id: id, name: name, building: building, nrofemployees:nrofemployees});
}

delete(i) { 
 let arr = this.departments; 
 arr = arr.filter( (x) => x.id != i);
 this.departments = arr;
}  

}


