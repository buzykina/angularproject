import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Department } from '../department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departmentsdashboard',
  templateUrl: './departmentsdashboard.component.html',
  styleUrls: ['./departmentsdashboard.component.css']
})
export class DepartmentsdashboardComponent implements OnInit {
  department: Department;

  constructor(
  private route: ActivatedRoute, 
  private departmentsService: DepartmentsService, 
  private location: Location
  ) { }

  ngOnInit() {
  	this.getDepartment();
    this.departmentsService.resetEmployees();
    this.departmentsService.addEmployeesToDepartments();
  }

  getDepartment(): void{
  const id = +this.route.snapshot.paramMap.get('id');
  this.department = this.departmentsService.getSpecificDepartment(id);

  }

  goBack(): void {
    this.location.back();
  }

}
