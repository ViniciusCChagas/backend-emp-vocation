import { IParamsUpdateEmployeeDto } from '../../../models/dtos/EmployeeDtos';
import { IEmployeesRepository } from '../../../repositories/interfaces/IEmployeesRepository';

class UpdateEmployeeUseCase {
	private employeesRepository: IEmployeesRepository;

	constructor(employeesRepository: IEmployeesRepository) {
		this.employeesRepository = employeesRepository;
	}

	async execute(params: IParamsUpdateEmployeeDto) {
		const { id, name, role, admissionDate } = params;

		const updatedEmployee = await this.employeesRepository.updateEmployee({
			id,
			name,
			role,
			admissionDate,
		});

		return updatedEmployee;
	}
}

export { UpdateEmployeeUseCase };
