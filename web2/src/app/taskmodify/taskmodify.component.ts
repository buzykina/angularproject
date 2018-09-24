import { Component, OnInit,Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-taskmodify',
  templateUrl: './taskmodify.component.html',
  styleUrls: ['./taskmodify.component.css']
})
export class TaskmodifyComponent implements OnInit {
@Input() task: Task;
  constructor() { }

  ngOnInit() {
  }

}
