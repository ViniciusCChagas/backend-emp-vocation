import { Employee } from '../../../models/Employee';
import { EmployeesRepository } from '../../../repositories/EmployeesRepository';

class GetEmployeesListUseCase {
	constructor(private employeesRepository: EmployeesRepository) {
		this.employeesRepository = employeesRepository;
	}

	async execute(): Promise<Employee[]> {
		const employees = await this.employeesRepository.getAllEmployees();

		return employees;
	}
}

export { GetEmployeesListUseCase };
