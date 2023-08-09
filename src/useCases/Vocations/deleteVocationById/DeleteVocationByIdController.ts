import { Request, Response } from 'express';
import { DeleteVocationByIdUseCase } from './DeleteVocationByIdUseCase';

class DeleteVocationByIdController {
	constructor(private deleteVocationByIdUseCase: DeleteVocationByIdUseCase) {
		this.deleteVocationByIdUseCase = deleteVocationByIdUseCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		const { vocationId } = request.params;

		try {
			await this.deleteVocationByIdUseCase.execute(vocationId);

			return response.status(200).json({
				message: 'Férias deletada com sucesso',
			});
		} catch (error) {
			if (error.message === 'Vocation not found') {
				return response.status(404).json({
					message: 'Vocation not found.',
				});
			}

			return response.status(400).json({
				message: error.message || 'Unexpected error.',
			});
		}
	}
}

export { DeleteVocationByIdController };
