import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { createNewVocationController } from '../useCases/Vocations/createNewVocation';
import { deleteVocationByIdController } from '../useCases/Vocations/deleteVocationById';
import { getVocationsByEmployeeIdController } from '../useCases/Vocations/getVocationsByEmployeeId';

const vocationsRoutes = Router();

vocationsRoutes.get('/employee/:employeeId', (request: Request, response: Response) => {
	return getVocationsByEmployeeIdController.handle(request, response);
});

vocationsRoutes.post('/', (request: Request, response: Response) => {
	return createNewVocationController.handle(request, response);
});

vocationsRoutes.delete('/:vocationId', (request: Request, response: Response) => {
	return deleteVocationByIdController.handle(request, response);
});

export { vocationsRoutes };
