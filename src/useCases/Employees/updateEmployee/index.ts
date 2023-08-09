import { EmployeesRepository } from '../../../repositories/EmployeesRepository';
import { UpdateEmployeeController } from './updateEmployeeController';
import { UpdateEmployeeUseCase } from './updateEmployeeUseCase';

const employeesRepository = new EmployeesRepository();

const updateEmployeeUseCase = new UpdateEmployeeUseCase(employeesRepository);

const updateEmployeeController = new UpdateEmployeeController(updateEmployeeUseCase);

export { updateEmployeeController };
