import { Request, Response } from 'express';
import { GetEmployeesListUseCase } from './GetEmployeesUseCase';

class GetEmployeesListController {
	constructor(private getEmployeesListUseCase: GetEmployeesListUseCase) {
		this.getEmployeesListUseCase = getEmployeesListUseCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const employees = await this.getEmployeesListUseCase.execute();

			return response.status(200).json(employees);
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error.',
			});
		}
	}
}

export { GetEmployeesListController };
