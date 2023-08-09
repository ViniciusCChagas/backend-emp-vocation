import { Request, Response } from 'express';
import { object, string } from 'yup';
import { IParamsCreateNewEmployeeDto } from '../../../models/dtos/EmployeeDtos';
import { CreateNewEmployeeUseCase } from './createNewEmployeeUseCase';

class CreateNewEmployeeController {
	private createNewEmployeeUseCase: CreateNewEmployeeUseCase;
	constructor(createNewEmployeeUseCase: CreateNewEmployeeUseCase) {
		this.createNewEmployeeUseCase = createNewEmployeeUseCase;
	}

	async handle(request: Request, response: Response) {
		const { name, role, admissionDate } = request.body as IParamsCreateNewEmployeeDto;

		const paramsValidationSchema = object({
			name: string().required().max(255).label('Nome'),
			role: string().required().max(255).label('Cargo'),
			admissionDate: string().required().label('Data de admissão'),
		});

		try {
			await paramsValidationSchema.validate({
				name,
				role,
				admissionDate,
			});

			const newEmployee = await this.createNewEmployeeUseCase.execute({
				name,
				role,
				admissionDate: new Date(admissionDate),
			});

			return response.status(200).json({
				message: 'Funcionário criado com sucesso',
				employee: newEmployee,
			});
		} catch (error) {
			console.log(error.message);

			return response.status(400).json({
				message: 'Parâmetro inválido',
				errors: error.errors,
			});
		}
	}
}
export { CreateNewEmployeeController };
