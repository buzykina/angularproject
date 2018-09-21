import { Employee } from './employee';

export class Department {
  id: number;
  name: string;
  building: string;
  nrofemployees: number;
  show:boolean;
  modify:boolean;
  employeesArr: Employee[];
}

export class Variables {
  add:boolean;
}