import { EmployeesRepository } from '../../../repositories/EmployeesRepository';
import { VocationsRepository } from '../../../repositories/VocationsRepository';
import { CreateNewVocationController } from './CreateNewVocationController';
import { CreateNewVocationUseCase } from './CreateNewVocationUseCase';

const vocationsRepository = new VocationsRepository();
const employeesRepository = new EmployeesRepository();

const createNewVocationUseCase = new CreateNewVocationUseCase(
	vocationsRepository,
	employeesRepository
);

const createNewVocationController = new CreateNewVocationController(
	createNewVocationUseCase
);

export { createNewVocationController };
