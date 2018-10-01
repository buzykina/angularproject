import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { EmployeemodifyComponent } from './employeemodify/employeemodify.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsaddComponent } from './departmentsadd/departmentsadd.component';
import { DepartmentsviewComponent } from './departmentsview/departmentsview.component';
import { DepartmentsmodifyComponent } from './departmentsmodify/departmentsmodify.component';

import{HttpClientModule} from '@angular/common/http';
import { Employeesview1Component } from './employeesview1/employeesview1.component';
import { DepartmentsdashboardComponent } from './departmentsdashboard/departmentsdashboard.component';
<<<<<<< HEAD
import { DepartmentssearchComponent } from './departmentssearch/departmentssearch.component';
=======
import { TaskaddComponent } from './taskadd/taskadd.component';
import { TaskmodifyComponent } from './taskmodify/taskmodify.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { AltertaskviewComponent } from './altertaskview/altertaskview.component';
<<<<<<< HEAD
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
=======
import { FilterPipe } from './filter.pipe';

>>>>>>> 1b3bea3c772338ff3cbe140c26ea51932c9ec5b7
>>>>>>> 77f9a5c208730960039c6f58c4a259a70b7c0949

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeeaddComponent,
    EmployeeviewComponent,
    EmployeemodifyComponent,
    MessagesComponent,
    DashboardComponent,
    DepartmentsaddComponent,
    DepartmentsviewComponent,
    DepartmentsmodifyComponent,
    Employeesview1Component,
    DepartmentsdashboardComponent,
<<<<<<< HEAD
    DepartmentssearchComponent,
=======
    TaskaddComponent,
    TaskmodifyComponent,
    TaskviewComponent,
    AltertaskviewComponent,
<<<<<<< HEAD
    EmployeeSearchComponent,
=======
    FilterPipe
>>>>>>> 1b3bea3c772338ff3cbe140c26ea51932c9ec5b7
>>>>>>> 77f9a5c208730960039c6f58c4a259a70b7c0949
  ],
  imports: [
    BrowserModule,

    FormsModule,

    AppRoutingModule,

    HttpClientModule,

    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
