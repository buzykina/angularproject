import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { EmployeemodifyComponent } from './employeemodify/employeemodify.component';
import { MessagesComponent } from './messages/messages.component';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { TaskmodifyComponent } from './taskmodify/taskmodify.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    TaskaddComponent,
    TaskviewComponent,
    TaskmodifyComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,

    FormsModule,

    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
