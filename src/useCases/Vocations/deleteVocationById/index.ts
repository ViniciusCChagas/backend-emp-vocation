import { VocationsRepository } from '../../../repositories/VocationsRepository';
import { DeleteVocationByIdController } from './DeleteVocationByIdController';
import { DeleteVocationByIdUseCase } from './DeleteVocationByIdUseCase';

const vocationsRepository = new VocationsRepository();

const deleteVocationByIdUseCase = new DeleteVocationByIdUseCase(vocationsRepository);

const deleteVocationByIdController = new DeleteVocationByIdController(
	deleteVocationByIdUseCase
);

export { deleteVocationByIdController };
