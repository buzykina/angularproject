import { Component, OnInit, Input} from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['../tasks/tasks.component.css']
})
export class TaskviewComponent implements OnInit {
@Input() task: Task;
  constructor(
  	private location: Location,
  	private taskService: TaskService,
  	private route : ActivatedRoute
  	) {}

  ngOnInit() {
  	this.getTask();
  }

  getTask(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.task = this.taskService.getTask(id);
  }

  goBack() : void {
    this.location.back();
  }
}