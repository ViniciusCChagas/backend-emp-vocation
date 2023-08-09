import { Vocation } from '../../models/Vocation';

interface IVocationsRepository {
	createNewVocation(vocation: Vocation): Promise<Vocation>;
	getVocationsByEmployeeId(employeeId: string): Promise<Vocation[]>;
	deleteVocationById(vocationId: string): Promise<void>;
	deleteVocationsByEmployeeId(employeeId: string): Promise<void>;
	getVocationById(vocationId: string): Promise<Vocation>;
}

export { IVocationsRepository };
