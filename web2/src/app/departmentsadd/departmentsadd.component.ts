import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';
import { Variables } from '../department';
import { DepartmentsService } from '../departments.service';

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

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit() {
  }

  add(id: number,name: string,building: string,nrofemployees: number): void {
  this.departmentsService.addDepartment(id,name,building,nrofemployees);
	this.variables.add = false;
  }

}
