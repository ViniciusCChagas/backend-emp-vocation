import { IEmployeesRepository } from '../../../repositories/interfaces/IEmployeesRepository';
import { IVocationsRepository } from '../../../repositories/interfaces/IVocationsRepository';

class DeleteEmployeeByIdUseCase {
	private employeesRepository: IEmployeesRepository;
	private vocationRepository: IVocationsRepository;

	constructor(
		employeesRepository: IEmployeesRepository,
		vocationRepository: IVocationsRepository
	) {
		this.employeesRepository = employeesRepository;
		this.vocationRepository = vocationRepository;
	}

	async execute(employeeId: string): Promise<void> {
		const employeeExists = await this.employeesRepository.getEmployeeById(employeeId);

		if (!employeeExists) {
			throw new Error('Employee not found');
		}

		await this.employeesRepository.deleteEmployee(employeeId);

		await this.vocationRepository.deleteVocationsByEmployeeId(employeeId);

		return;
	}
}

export { DeleteEmployeeByIdUseCase };
