class Employee {
	_id?: string;
	name: string;
	role: string;
	admissionDate: Date;

	constructor(params: {
		_id?: string;
		name: string;
		role: string;
		admissionDate: Date;
	}) {
		this._id = params._id ?? null;
		this.name = params.name;
		this.role = params.role;
		this.admissionDate = params.admissionDate;
	}
}

export { Employee };
