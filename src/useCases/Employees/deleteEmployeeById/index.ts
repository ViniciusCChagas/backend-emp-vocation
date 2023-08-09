import { EmployeesRepository } from '../../../repositories/EmployeesRepository';
import { VocationsRepository } from '../../../repositories/VocationsRepository';
import { DeleteEmployeeByIdController } from './deleteEmployeeByIdController';
import { DeleteEmployeeByIdUseCase } from './deleteEmployeeByIdUseCase';

const employeeRepository = new EmployeesRepository();
const vocationRepository = new VocationsRepository();

const deleteEmployeeUseCase = new DeleteEmployeeByIdUseCase(
	employeeRepository,
	vocationRepository
);

const deleteEmployeeByIdController = new DeleteEmployeeByIdController(
	deleteEmployeeUseCase
);

export { deleteEmployeeByIdController };
