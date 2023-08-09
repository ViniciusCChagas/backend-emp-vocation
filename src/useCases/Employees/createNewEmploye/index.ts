import { EmployeesRepository } from '../../../repositories/EmployeesRepository';
import { CreateNewEmployeeController } from './createNewEmployeeController';
import { CreateNewEmployeeUseCase } from './createNewEmployeeUseCase';

const employeesRepository = new EmployeesRepository();

const createNewEmployeeUseCase = new CreateNewEmployeeUseCase(employeesRepository);

const createNewEmployeeController = new CreateNewEmployeeController(
	createNewEmployeeUseCase
);

export { createNewEmployeeController };
