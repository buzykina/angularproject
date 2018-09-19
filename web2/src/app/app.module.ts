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
  ],
  imports: [
    BrowserModule,

    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
