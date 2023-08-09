import { Employee } from '../../../models/Employee';
import { EmployeesRepository } from '../../../repositories/EmployeesRepository';

class GetEmployeeByIdUseCase {
	constructor(private employeesRepository: EmployeesRepository) {
		this.employeesRepository = employeesRepository;
	}

	async execute(employeeId: string): Promise<Employee> {
		const employee = await this.employeesRepository.getEmployeeById(employeeId);

		return employee;
	}
}

export { GetEmployeeByIdUseCase };
