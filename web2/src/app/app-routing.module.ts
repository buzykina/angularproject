import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent }  from './employees/employees.component';
import { TasksComponent }  from './tasks/tasks.component';
import { DepartmentsComponent }  from './departments/departments.component';
import { MessagesComponent }  from './messages/messages.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DepartmentsdashboardComponent }  from './departmentsdashboard/departmentsdashboard.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { TaskviewComponent } from './taskview/taskview.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'log-files', component: MessagesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'detail/:id', component: DepartmentsdashboardComponent },
  { path: 'detailemployee/:id', component: EmployeeviewComponent },
  { path: 'taskview/:id', component: TaskviewComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
