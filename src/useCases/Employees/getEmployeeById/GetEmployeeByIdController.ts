import { Request, Response } from 'express';
import { GetEmployeeByIdUseCase } from './GetEmployeeByIdUseCase';

class GetEmployeeByIdController {
	constructor(private getEmployeeByIdUseCase: GetEmployeeByIdUseCase) {
		this.getEmployeeByIdUseCase = getEmployeeByIdUseCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		const { employeeId } = request.params;

		try {
			const employee = await this.getEmployeeByIdUseCase.execute(employeeId);

			if (!employee) {
				return response.status(404).json({
					message: 'Employee not found.',
				});
			}

			return response.status(200).json(employee);
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error.',
			});
		}
	}
}

export { GetEmployeeByIdController };
