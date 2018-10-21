import { Employee } from './employee';

export class Task {
		id: number;
		depID: number;
		employeeID: number[];
		Employees: Employee[];
		name: string;
		deadline: Date;
		show: boolean;
		Modify: boolean;
}