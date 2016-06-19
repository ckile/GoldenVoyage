import { Hotel} from "./hotel";

export class Employee {

	Name: string;

	UserRoles: number;

	UserCode: string;

	DepartmentId: number;

	Department: any;

	PositionId: number;

	Position: any;

	DefaultHotelId: number;

	DefaultHotel: Hotel;
}

export class EmployeeLogin {
	EmployeeId: number;

	Employee: Employee;

	CurrentHotelId: number;

	CurrentHotel: Hotel;

	LoginTime: Date;

}