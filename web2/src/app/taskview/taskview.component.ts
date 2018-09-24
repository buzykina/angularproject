import { Component, OnInit, Input} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
@Input() task: Task;
  constructor() { }

  ngOnInit() {
  }

}