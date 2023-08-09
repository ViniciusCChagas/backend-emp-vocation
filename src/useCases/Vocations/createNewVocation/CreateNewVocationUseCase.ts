import { IParamsCreateNewVocationDto } from '../../../models/dtos/VocationDtos';
import { IVocationsRepository } from '../../../repositories/interfaces/IVocationsRepository';

class CreateNewVocationUseCase {
	private vocationsRepository: IVocationsRepository;

	constructor(vocationsRepository: IVocationsRepository) {
		this.vocationsRepository = vocationsRepository;
	}

	async execute(params: IParamsCreateNewVocationDto) {
		const { employeeId, initialDate, finalDate } = params;

		const newVocation = await this.vocationsRepository.createNewVocation({
			employeeId,
			initialDate,
			finalDate,
		});

		return newVocation;
	}
}

export { CreateNewVocationUseCase };
