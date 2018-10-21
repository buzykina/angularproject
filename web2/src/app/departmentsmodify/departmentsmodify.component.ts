import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';
import { DepartmentsService } from '../departments.service';
import { DepartmentsComponent } from '../departments/departments.component';

@Component({
  selector: 'app-departmentsmodify',
  templateUrl: './departmentsmodify.component.html',
  styleUrls: ['./departmentsmodify.component.css']
})
export class DepartmentsmodifyComponent implements OnInit {

  @Input() department: Department;

  constructor(private departmentsService: DepartmentsService, private departmentsComponent: DepartmentsComponent) { }

  ngOnInit() {
  }

  modify(id,name,building): void{
    this.departmentsService.modifyDepartment(id,name,building);
  	this.departmentsComponent.CanModify = false;
  }

  onCancel() {
    this.departmentsComponent.CanModify = false;
  }

}
