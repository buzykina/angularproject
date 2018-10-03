import { Component, OnInit, Input} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-altertaskview',
  templateUrl: './altertaskview.component.html',
  styleUrls: ['../tasks/tasks.component.css']
})
export class AltertaskviewComponent implements OnInit {
@Input() task: Task;
  constructor() { }

  ngOnInit() {
  }
}
