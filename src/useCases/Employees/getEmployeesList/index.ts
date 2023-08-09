import { EmployeesRepository } from '../../../repositories/EmployeesRepository';
import { GetEmployeesListController } from './GetEmployeesController';
import { GetEmployeesListUseCase } from './GetEmployeesUseCase';

const employeesRepository = new EmployeesRepository();

const getEmployeesListUseCase = new GetEmployeesListUseCase(employeesRepository);

const getEmployeesListController = new GetEmployeesListController(
	getEmployeesListUseCase
);

export { getEmployeesListController };
