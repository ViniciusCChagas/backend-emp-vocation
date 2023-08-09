import { Request, Response } from 'express';
import { DeleteEmployeeByIdUseCase } from './deleteEmployeeByIdUseCase';

class DeleteEmployeeByIdController {
	constructor(private deleteEmployeeByIdUseCase: DeleteEmployeeByIdUseCase) {
		this.deleteEmployeeByIdUseCase = deleteEmployeeByIdUseCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		const { employeeId } = request.params;

		try {
			await this.deleteEmployeeByIdUseCase.execute(employeeId);

			return response.status(200).json({
				message: 'Funcionário deletado com sucesso',
			});
		} catch (error) {
			if (error.message === 'Employee not found') {
				return response.status(404).json({
					message: 'Employee not found.',
				});
			}

			return response.status(400).json({
				message: error.message || 'Unexpected error.',
			});
		}
	}
}

export { DeleteEmployeeByIdController };
