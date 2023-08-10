import { areIntervalsOverlapping, differenceInCalendarDays, isPast } from 'date-fns';
import { IParamsCreateNewVocationDto } from '../../../models/dtos/VocationDtos';
import { IEmployeesRepository } from '../../../repositories/interfaces/IEmployeesRepository';
import { IVocationsRepository } from '../../../repositories/interfaces/IVocationsRepository';
import { getFinalDate, getInitialDate } from '../../../utils';
import { getAvailableVocationDays } from '../../../utils/VocationUtils';

class CreateNewVocationUseCase {
	private vocationsRepository: IVocationsRepository;
	private employeesRepository: IEmployeesRepository;

	constructor(
		vocationsRepository: IVocationsRepository,
		employeesRepository: IEmployeesRepository
	) {
		this.vocationsRepository = vocationsRepository;
		this.employeesRepository = employeesRepository;
	}

	async execute(params: IParamsCreateNewVocationDto) {
		const {
			employeeId,
			initialDate: auxInitialDate,
			finalDate: auxFinalDate,
		} = params;

		const initialDate = getInitialDate(auxInitialDate);
		const finalDate = getFinalDate(auxFinalDate);

		const employee = await this.employeesRepository.getEmployeeById(employeeId);

		if (!employee) {
			throw new Error('Funcionário não encontrado!');
		}

		const vocations = await this.vocationsRepository.getVocationsByEmployeeId(
			employeeId
		);

		const availableVocationsDays = getAvailableVocationDays(employee, vocations);

		const incommingVocations = vocations.filter(
			(vocation) => isPast(new Date(vocation.initialDate)) === false
		);

		const totalDaysSelected = differenceInCalendarDays(finalDate, initialDate) + 1;
		console.log('initialDate:', initialDate);
		console.log('finalDate:', finalDate);
		console.log('totalDaysSelected:', totalDaysSelected);

		if (totalDaysSelected > availableVocationsDays) {
			throw new Error(
				'Numero de dias selecionados é maior do que os dias disponiveis!'
			);
		}

		const newAvailableDays = availableVocationsDays - totalDaysSelected;

		const isOverlappingSomeVocation = incommingVocations.some((vocation) => {
			const vocationInitialDate = getInitialDate(new Date(vocation.initialDate));
			const vocationFinalDate = getFinalDate(new Date(vocation.finalDate));

			if (isPast(vocationInitialDate)) {
				return false;
			}

			const isOverlapping = areIntervalsOverlapping(
				{ start: initialDate, end: finalDate },
				{ start: vocationInitialDate, end: vocationFinalDate }
			);

			return isOverlapping;
		});

		const isSomeVocationPeriodGraterThan14Days = incommingVocations.some(
			(vocation) => {
				const vocationInitialDate = getInitialDate(
					new Date(vocation.initialDate)
				);
				const vocationFinalDate = getFinalDate(new Date(vocation.finalDate));

				const totalDays =
					differenceInCalendarDays(vocationFinalDate, vocationInitialDate) + 1;

				return totalDays >= 14;
			}
		);

		if (
			totalDaysSelected < 14 &&
			!isSomeVocationPeriodGraterThan14Days &&
			newAvailableDays < 14
		) {
			throw new Error(
				'Você deve ter ao menos um período de férias maior ou igual a 14 dias agendado!'
			);
		}

		if (incommingVocations.length === 2 && newAvailableDays > 0) {
			throw new Error(
				'Você pode ter no máximo 3 agendamentos, certifique-se de que não sobrem dias a serem agendados!'
			);
		}

		if (newAvailableDays > 0 && newAvailableDays < 5) {
			throw new Error('Você deve ter ao menos 5 dias disponiveis para agendar!');
		}

		if (isOverlappingSomeVocation) {
			throw new Error(
				'O período de férias não pode se sobrepor a outro período de férias!'
			);
		}

		if (initialDate < new Date()) {
			throw new Error('A data inicial não pode ser menor que a data atual!');
		}

		if (initialDate > finalDate) {
			throw new Error('A data inicial não pode ser maior que a data final!');
		}

		if (totalDaysSelected < 5) {
			throw new Error('O período de férias deve ser maior que 5 dias!');
		}

		const newVocation = await this.vocationsRepository.createNewVocation({
			employeeId,
			initialDate,
			finalDate,
		});

		return newVocation;
	}
}

export { CreateNewVocationUseCase };
