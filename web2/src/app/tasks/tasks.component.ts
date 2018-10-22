import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  selectedTask: Task;
  add: Boolean = false;
  modify1: Boolean = false;
  Name: string;
  Name_Asc: boolean;
  Id: string;
  Id_Asc: boolean;
  Employee_Name: string;
  Employee_Name_Asc: boolean;
  Department_Name: string;
  Department_Name_Asc: boolean;
  id: number = 0;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  this.getTask();
  this.Name = "Name";
  this.Name_Asc = true;
  this.Id = "#";
  this.Id_Asc = true;
  this.Employee_Name = "Employee Name";
  this.Employee_Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
  }
  getTask(): void {
  this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
}

 view()
 {
   this.add = false;
   this.taskService.view(this.selectedTask.id);
 }
delete(id) { 
 this.taskService.delete(id);
  for (var k = 0; k < this.tasks.length; ++k) 
  {
    if(id == this.tasks[k].id)
    {
      this.tasks.splice(k,1);
    }
  }
} 
add1():void{
this.add =true;
this.modify1 = false;
}

modify(id: number)
{
  this.add = false;
  this.modify1 = true;
  console.log(id);
  this.id = id;  
  this.selectedTask = this.taskService.getTask(id);
  console.log(this.selectedTask);
}
onSelect(department: Task): void {
    this.selectedTask = department;
} 
sortbyTaskName(): void{
  
  this.Employee_Name = "Employee Name";
  this.Employee_Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
  if(this.Name_Asc == true)
  {
    this.Name = "Name ↑";
    this.Name_Asc = false;
    this.tasks.sort(function(a: Task, b:Task){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
  }
  else 
  {
    this.Name = "Name ↓";
    this.Name_Asc = true;
    this.tasks.sort(function(a: Task, b: Task){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      return 0;
    });
  }
}
sortbyEmployeeName(): void{
  this.Id = "#";
  this.Id_Asc = true;
  this.Name = "Name";
  this.Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
  if(this.Employee_Name_Asc == true)
  {
    this.Employee_Name = "Employee Name ↑";
    this.Employee_Name_Asc = false;
    this.tasks.sort(function(a: Task, b:Task){
      if(a.employee_name.toLowerCase() < b.employee_name.toLowerCase()) return -1;
      if(a.employee_name.toLowerCase() > b.employee_name.toLowerCase()) return 1;
      return 0;
    });
  }
  else 
  {
    this.Employee_Name = "Employee Name ↓";
    this.Employee_Name_Asc = true;
    this.tasks.sort(function(a: Task, b:Task){
      if(a.employee_name.toLowerCase() < b.employee_name.toLowerCase()) return 1;
      if(a.employee_name.toLowerCase() > b.employee_name.toLowerCase()) return -1;
      return 0;
    });
  }
}
sortbyDepartmentName(): void{
  this.Id = "#";
  this.Id_Asc = true;
  this.Name = "Name";
  this.Name_Asc = true;
  this.Employee_Name = "Employee Name";
  this.Employee_Name_Asc = true;
  if(this.Department_Name_Asc == true)
  {
    this.Department_Name = "Department Name ↑";
    this.Department_Name_Asc = false;
    this.tasks.sort(function(a: Task, b:Task){
      if(a.department_name.toLowerCase() < b.department_name.toLowerCase()) return -1;
      if(a.department_name.toLowerCase() > b.department_name.toLowerCase()) return 1;
      return 0;
    });
  }
  else 
  {
    this.Department_Name = "Department Name ↓";
    this.Department_Name_Asc = true;
    this.tasks.sort(function(a: Task, b:Task){
      if(a.department_name.toLowerCase() < b.department_name.toLowerCase()) return 1;
      if(a.department_name.toLowerCase() > b.department_name.toLowerCase()) return -1;
      return 0;
    });
  }
}
sortbyId(): void{
  this.Employee_Name = "Employee Name";
  this.Employee_Name_Asc = true;
  this.Name = "Name";
  this.Name_Asc = true;
  this.Department_Name = "Department Name";
  this.Department_Name_Asc = true;
  if(this.Id_Asc == true)
  {
    this.Id = "# ↑";
    this.Id_Asc = false;
    this.tasks.sort();
  }
  else 
  {
    this.Id = "# ↓";
    this.Id_Asc = true;
    this.tasks.sort().reverse();
  }
}

}
