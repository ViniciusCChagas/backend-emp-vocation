import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { createNewEmployeeController } from '../useCases/Employees/createNewEmploye';
import { deleteEmployeeByIdController } from '../useCases/Employees/deleteEmployeeById';
import { getEmployeeByIdController } from '../useCases/Employees/getEmployeeById';
import { getEmployeesListController } from '../useCases/Employees/getEmployeesList';
import { updateEmployeeController } from '../useCases/Employees/updateEmployee';

const employeesRoutes = Router();

employeesRoutes.get('/', (request: Request, response: Response) => {
	return getEmployeesListController.handle(request, response);
});

employeesRoutes.post('/', (request: Request, response: Response) => {
	return createNewEmployeeController.handle(request, response);
});

employeesRoutes.get('/:employeeId', (request: Request, response: Response) => {
	return getEmployeeByIdController.handle(request, response);
});

employeesRoutes.put('/:employeeId', (request: Request, response: Response) => {
	return updateEmployeeController.handle(request, response);
});

employeesRoutes.delete('/:employeeId', (request: Request, response: Response) => {
	return deleteEmployeeByIdController.handle(request, response);
});

export { employeesRoutes };
