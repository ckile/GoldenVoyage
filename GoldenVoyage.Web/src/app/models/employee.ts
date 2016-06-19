import { Hotel} from "./hotel";

export class Employee {
	Id: number;

	Name: string;

	Role: number;

	UserCode: string;

	DepartmentId: number;

	Department: any;

	PositionId: number;

	Position: any;

	DefaultHotelId: number;

	DefaultHotel: Hotel;
}

export class EmployeeLogin {
	Id: number;

	EmployeeId: number;

	Employee: Employee;

	CurrentHotelId: number;

	CurrentHotel: Hotel;

	LoginTime: Date;

}