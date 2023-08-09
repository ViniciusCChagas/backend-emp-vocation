import { VocationsRepository } from '../../../repositories/VocationsRepository';
import { CreateNewVocationController } from './CreateNewVocationController';
import { CreateNewVocationUseCase } from './CreateNewVocationUseCase';

const vocationsRepository = new VocationsRepository();

const createNewVocationUseCase = new CreateNewVocationUseCase(vocationsRepository);

const createNewVocationController = new CreateNewVocationController(
	createNewVocationUseCase
);

export { createNewVocationController };
