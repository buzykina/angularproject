import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';
import { Variables } from '../department';
import { DepartmentsService } from '../departments.service';
import { DepartmentsComponent } from '../departments/departments.component';

@Component({
  selector: 'app-departmentsadd',
  templateUrl: './departmentsadd.component.html',
  styleUrls: ['./departmentsadd.component.css']
})
export class DepartmentsaddComponent implements OnInit {

  @Input() department: Department;

  variables: Variables = {
  add: false
  };

  constructor(private departmentsService: DepartmentsService, private departmentsComponent: DepartmentsComponent) { }

  ngOnInit() {
  }

  add(name: string,building: string): void {
  this.departmentsService.addDepartment(name,building)
	this.departmentsComponent.add1 = false;
  }

  onCancel() {
    this.departmentsComponent.add1 = false;
  }


}
