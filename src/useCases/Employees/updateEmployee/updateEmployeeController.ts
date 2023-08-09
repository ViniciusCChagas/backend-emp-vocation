import { Request, Response } from 'express';
import { object, string } from 'yup';
import { IParamsUpdateEmployeeDto } from '../../../models/dtos/EmployeeDtos';
import { UpdateEmployeeUseCase } from './updateEmployeeUseCase';

class UpdateEmployeeController {
	private updateEmployeeUseCase: UpdateEmployeeUseCase;
	constructor(updateEmployeeUseCase: UpdateEmployeeUseCase) {
		this.updateEmployeeUseCase = updateEmployeeUseCase;
	}

	async handle(request: Request, response: Response) {
		const { employeeId } = request.params;
		const { name, role, admissionDate } = request.body as IParamsUpdateEmployeeDto;

		const paramsValidationSchema = object({
			employeeId: string().required().label('Id'),
			name: string().required().max(255).label('Nome'),
			role: string().required().max(255).label('Cargo'),
			admissionDate: string().required().label('Data de admissão'),
		});

		try {
			await paramsValidationSchema.validate({
				employeeId,
				name,
				role,
				admissionDate,
			});

			const newEmployee = await this.updateEmployeeUseCase.execute({
				id: employeeId,
				name,
				role,
				admissionDate: new Date(admissionDate),
			});

			return response.status(200).json({
				message: 'Funcionário atualizado com sucesso',
				newEmployee: newEmployee,
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
export { UpdateEmployeeController };
