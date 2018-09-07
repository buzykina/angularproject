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

}
