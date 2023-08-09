import { IVocationsRepository } from '../../../repositories/interfaces/IVocationsRepository';

class DeleteVocationByIdUseCase {
	private vocationsRepository: IVocationsRepository;
	constructor(vocationsRepository: IVocationsRepository) {
		this.vocationsRepository = vocationsRepository;
	}

	async execute(vocationId: string): Promise<void> {
		const vocationExists = await this.vocationsRepository.getVocationById(vocationId);

		if (!vocationExists) {
			throw new Error('Vocation does not exist');
		}

		await this.vocationsRepository.deleteVocationById(vocationId);

		return;
	}
}
export { DeleteVocationByIdUseCase };
