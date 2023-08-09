import { EmployeesRepository } from '../../../repositories/EmployeesRepository';
import { GetEmployeeByIdController } from './GetEmployeeByIdController';
import { GetEmployeeByIdUseCase } from './GetEmployeeByIdUseCase';

const employeesRepository = new EmployeesRepository();

const getEmployeeByIdUseCase = new GetEmployeeByIdUseCase(employeesRepository);

const getEmployeeByIdController = new GetEmployeeByIdController(getEmployeeByIdUseCase);

export { getEmployeeByIdController };
