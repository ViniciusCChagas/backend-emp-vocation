import { Vocation } from '../../../models/Vocation';
import { IVocationsRepository } from '../../../repositories/interfaces/IVocationsRepository';

class GetVocationsByEmployeeIdUseCase {
	private vocationsRepository: IVocationsRepository;
	constructor(vocationsRepository: IVocationsRepository) {
		this.vocationsRepository = vocationsRepository;
	}

	async execute(employeeId: string): Promise<Vocation[]> {
		const vocations = await this.vocationsRepository.getVocationsByEmployeeId(
			employeeId
		);

		return vocations;
	}
}

export { GetVocationsByEmployeeIdUseCase };
