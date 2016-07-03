import { Hotel} from "./hotel";

export class Employee {
	id: number;

	name: string;

	role: number;

	userCode: string;

	departmentId: number;

	department: any;

	positionId: number;

	position: any;

	defaultHotelId: number;

	defaultHotel: Hotel;
}

export class EmployeeLogin {
	id: number;

	employeeId: number;

	employee: Employee;

	currentHotelId: number;

	currentHotel: Hotel;

	loginTime: Date;

}