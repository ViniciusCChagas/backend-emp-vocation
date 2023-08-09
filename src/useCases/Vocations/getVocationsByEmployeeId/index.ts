import { VocationsRepository } from '../../../repositories/VocationsRepository';
import { GetVocationsByEmployeeIdController } from './GetVocationsByEmployeeIdController';
import { GetVocationsByEmployeeIdUseCase } from './GetVocationsByEmployeeIdUseCase';

const vocationsRepository = new VocationsRepository();

const getVocationsByEmployeeIdUseCase = new GetVocationsByEmployeeIdUseCase(
	vocationsRepository
);

const getVocationsByEmployeeIdController = new GetVocationsByEmployeeIdController(
	getVocationsByEmployeeIdUseCase
);

export { getVocationsByEmployeeIdController };
