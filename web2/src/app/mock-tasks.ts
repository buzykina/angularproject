import {Task} from './task';

export const TASKS: Task[] = [
  { id: 1,depID: 2, department_name: null,employeeName: 'Jizdan Mihai', name: 'Do the dishes',deadline: new Date(2019,3,13), show: false, Modify: false},
  { id: 2,depID: 3, department_name: null,employeeName: 'Annadurai Rahul', name: 'Wash the car',deadline: new Date(2019,3,13), show: false, Modify: false},
  { id: 3,depID: 1, department_name: null,employeeName: 'Jizdan Mihai', name: 'Fix the bicycle',deadline: new Date(2019,3,13),show: false, Modify: false},
  { id: 4,depID: 5, department_name: null,employeeName: 'Jizdan Mihai', name: 'Go to the gym',deadline: new Date(2019,3,13), show: false, Modify: false},
  { id: 5,depID: 4, department_name: null,employeeName: 'Buzykina Yevheniia', name: 'Buy food',deadline: new Date(2019,3,13), show: false, Modify: false},
  { id: 6,depID: 6, department_name: null,employeeName: 'Jizdan Mihai', name: 'Clean the room',deadline: new Date(2019,3,13), show: false, Modify: false},
  ];