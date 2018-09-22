import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent }  from './employees/employees.component';
import { TasksComponent }  from './tasks/tasks.component';
import { DepartmentsComponent }  from './departments/departments.component';
import { MessagesComponent }  from './messages/messages.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
<<<<<<< HEAD
import { DepartmentsmodifyComponent }  from './departmentsmodify/departmentsmodify.component';
=======
import { EmployeeviewComponent } from './employeeview/employeeview.component';
>>>>>>> dashboard
const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'log-files', component: MessagesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
<<<<<<< HEAD
  { path: 'detail/:id', component: DepartmentsmodifyComponent },
=======
  { path: 'detail/:id', component: EmployeeviewComponent }
>>>>>>> dashboard

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
