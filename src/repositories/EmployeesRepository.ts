import { ObjectId } from 'mongodb';
import { Employee } from '../models/Employee';
import {
	IParamsCreateNewEmployeeDto,
	IParamsUpdateEmployeeDto,
} from '../models/dtos/EmployeeDtos';
import { mongoDbClient } from '../services/MongoDbService';
import { IEmployeesRepository } from './interfaces/IEmployeesRepository';

const databaseName = process.env.MONGODB_DATABASE_NAME;
const collectionName = process.env.MONGODB_EMPLOYEES_COLLECTION;

const db = mongoDbClient.db(databaseName);
const collection = db.collection(collectionName);

class EmployeesRepository implements IEmployeesRepository {
	async getAllEmployees(): Promise<Employee[]> {
		const result = await collection
			.find()
			.sort({
				name: 'asc',
			})
			.toArray();

		const employees = result.map((employee) => {
			return new Employee({
				_id: employee._id.toString(),
				name: employee.name,
				role: employee.role,
				admissionDate: employee.admissionDate,
			});
		});

		return employees;
	}

	async getEmployeeById(employeeId: string): Promise<Employee | null> {
		const result = await collection.findOne({
			_id: new ObjectId(employeeId),
		});

		if (!result) {
			return null;
		}

		return new Employee({
			_id: result._id.toString(),
			name: result.name,
			role: result.role,
			admissionDate: result.admissionDate,
		});
	}

	async createNewEmployee(employee: IParamsCreateNewEmployeeDto): Promise<Employee> {
		const result = await collection.insertOne({
			name: employee.name,
			role: employee.role,
			admissionDate: employee.admissionDate,
		});

		return new Employee({
			_id: result.insertedId.toString(),
			...employee,
		});
	}

	async updateEmployee(employee: IParamsUpdateEmployeeDto): Promise<Employee> {
		const result = await collection.findOneAndUpdate(
			{
				_id: new ObjectId(employee.id),
			},
			{
				$set: {
					name: employee.name,
					role: employee.role,
					admissionDate: employee.admissionDate,
				},
			},
			{
				returnDocument: 'after',
			}
		);

		if (!result) {
			return null;
		}

		return new Employee({
			_id: result.value._id.toString(),
			name: result.value.name,
			role: result.value.role,
			admissionDate: result.value.admissionDate,
		});
	}

	async deleteEmployee(employeeId: string): Promise<void> {
		await collection.findOneAndDelete({
			_id: new ObjectId(employeeId),
		});
	}
}

export { EmployeesRepository };
