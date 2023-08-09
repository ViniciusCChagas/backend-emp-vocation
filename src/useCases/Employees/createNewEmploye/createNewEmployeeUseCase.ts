import { IParamsCreateNewEmployeeDto } from '../../../models/dtos/EmployeeDtos';
import { IEmployeesRepository } from '../../../repositories/interfaces/IEmployeesRepository';

class CreateNewEmployeeUseCase {
	private employeesRepository: IEmployeesRepository;

	constructor(employeesRepository: IEmployeesRepository) {
		this.employeesRepository = employeesRepository;
	}

	async execute(params: IParamsCreateNewEmployeeDto) {
		const { name, role, admissionDate } = params;

		const newEmployee = await this.employeesRepository.createNewEmployee({
			name,
			role,
			admissionDate,
		});

		return newEmployee;
	}
}

export { CreateNewEmployeeUseCase };
