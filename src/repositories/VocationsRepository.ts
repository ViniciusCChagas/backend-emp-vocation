import { formatISO } from 'date-fns';
import { ObjectId } from 'mongodb';
import { Vocation } from '../models/Vocation';
import { mongoDbClient } from '../services/MongoDbService';
import { IVocationsRepository } from './interfaces/IVocationsRepository';

const databaseName = process.env.MONGODB_DATABASE_NAME;
const collectionName = process.env.MONGODB_VOCATIONS_COLLECTION;

const db = mongoDbClient.db(databaseName);
const collection = db.collection(collectionName);

class VocationsRepository implements IVocationsRepository {
	async createNewVocation(vocation: Vocation): Promise<Vocation> {
		const result = await collection.insertOne({
			employeeId: new ObjectId(vocation.employeeId),
			initialDate: formatISO(vocation.initialDate),
			finalDate: formatISO(vocation.finalDate),
		});

		return new Vocation({
			_id: result.insertedId.toString(),
			...vocation,
		});
	}

	async getVocationById(vocationId: string): Promise<Vocation> {
		const result = await collection.findOne({
			_id: new ObjectId(vocationId),
		});

		if (!result) {
			return null;
		}

		return new Vocation({
			_id: result._id.toString(),
			employeeId: result.employeeId.toString(),
			initialDate: result.initialDate,
			finalDate: result.finalDate,
		});
	}

	async getVocationsByEmployeeId(employeeId: string): Promise<Vocation[]> {
		const result = await collection
			.find({
				employeeId: new ObjectId(employeeId),
			})
			.sort({
				initialDate: 'asc',
			})
			.toArray();

		const vocations = result.map((employee) => {
			return new Vocation({
				_id: employee._id.toString(),
				employeeId: employee.employeeId.toString(),
				initialDate: employee.initialDate,
				finalDate: employee.finalDate,
			});
		});

		return vocations;
	}

	async deleteVocationById(vocationId: string): Promise<void> {
		await collection.findOneAndDelete({
			_id: new ObjectId(vocationId),
		});
	}

	async deleteVocationsByEmployeeId(employeeId: string): Promise<void> {
		await collection.deleteMany({
			employeeId: new ObjectId(employeeId),
		});
	}
}

export { VocationsRepository };
