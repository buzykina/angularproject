import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Employees } from './mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(): Employee[] {
  return Employees;
}
}
