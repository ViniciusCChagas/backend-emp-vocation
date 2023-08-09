import { Request, Response } from 'express';
import { GetVocationsByEmployeeIdUseCase } from './GetVocationsByEmployeeIdUseCase';

class GetVocationsByEmployeeIdController {
	private getVocationsByEmployeeIdUseCase: GetVocationsByEmployeeIdUseCase;
	constructor(getVocationsByEmployeeIdUseCase: GetVocationsByEmployeeIdUseCase) {
		this.getVocationsByEmployeeIdUseCase = getVocationsByEmployeeIdUseCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		const employeeId = request.params.employeeId;

		try {
			const vocations = await this.getVocationsByEmployeeIdUseCase.execute(
				employeeId
			);

			return response.status(200).json(vocations);
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error.',
			});
		}
	}
}
export { GetVocationsByEmployeeIdController };
