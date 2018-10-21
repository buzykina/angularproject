import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Department } from '../department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departmentssearch',
  templateUrl: './departmentssearch.component.html',
  styleUrls: ['./departmentssearch.component.css']
})
export class DepartmentssearchComponent implements OnInit {

  departments: Department[];

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit(){
  }

  searchdepartment(term: string): void{
  this.departmentsService.searchDepartments(term)
    .subscribe(Departments => this.departments = Departments);
  }

}
