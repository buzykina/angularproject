import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { DepartmentsComponent } from './departments/departments.component'; //Angular ngModel imported from here.


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    TasksComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,

    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
