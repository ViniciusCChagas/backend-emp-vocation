import { Employee } from '../../models/Employee';
import {
	IParamsCreateNewEmployeeDto,
	IParamsUpdateEmployeeDto,
} from '../../models/dtos/EmployeeDtos';

interface IEmployeesRepository {
	getAllEmployees(): Promise<Employee[]>;
	getEmployeeById(employeeId: string): Promise<Employee | null>;
	createNewEmployee(newEmployee: IParamsCreateNewEmployeeDto): Promise<Employee>;
	updateEmployee(employee: IParamsUpdateEmployeeDto): Promise<Employee>;
	deleteEmployee(employeeId: string): Promise<void>;
}

export { IEmployeesRepository };
