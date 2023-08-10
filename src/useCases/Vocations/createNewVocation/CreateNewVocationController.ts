import { Request, Response } from 'express';
import { object, string } from 'yup';
import { IParamsCreateNewVocationDto } from '../../../models/dtos/VocationDtos';
import { CreateNewVocationUseCase } from './CreateNewVocationUseCase';

class CreateNewVocationController {
	private createNewVocationUseCase: CreateNewVocationUseCase;
	constructor(createNewVocationUseCase: CreateNewVocationUseCase) {
		this.createNewVocationUseCase = createNewVocationUseCase;
	}

	async handle(request: Request, response: Response) {
		const { employeeId, initialDate, finalDate } =
			request.body as IParamsCreateNewVocationDto;

		const paramsValidationSchema = object({
			employeeId: string().required().label('ID do funcionário'),
			initialDate: string().required().label('Data inicial'),
			finalDate: string().required().label('Data final'),
		});

		try {
			await paramsValidationSchema.validate({
				employeeId,
				initialDate,
				finalDate,
			});

			const newVocation = await this.createNewVocationUseCase.execute({
				employeeId,
				initialDate: new Date(initialDate + ' 00:00:00'),
				finalDate: new Date(finalDate + ' 00:00:00'),
			});

			return response.status(200).json({
				message: 'Férias criada com sucesso',
				vocation: newVocation,
			});
		} catch (error) {
			console.log(error.message);

			return response.status(400).json({
				message: 'Erro ao criar férias',
				errors: error.errors ?? [error.message],
			});
		}
	}
}
export { CreateNewVocationController };
