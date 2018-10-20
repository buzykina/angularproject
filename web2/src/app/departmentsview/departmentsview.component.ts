import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-departmentsview',
  templateUrl: './departmentsview.component.html',
  styleUrls: ['./departmentsview.component.css']
})
export class DepartmentsviewComponent implements OnInit {

  @Input() department: Department;
	
  constructor() { }

  ngOnInit() {
  }

}
