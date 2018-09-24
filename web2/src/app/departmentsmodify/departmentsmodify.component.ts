import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../Department';

@Component({
  selector: 'app-departmentsmodify',
  templateUrl: './departmentsmodify.component.html',
  styleUrls: ['./departmentsmodify.component.css']
})
export class DepartmentsmodifyComponent implements OnInit {

  @Input() department: Department;

  constructor() { }

  ngOnInit() {
  }

}
