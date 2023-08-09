class Vocation {
	_id?: string;
	employeeId: string;
	initialDate: Date;
	finalDate: Date;

	constructor(params: {
		_id?: string;
		employeeId: string;
		initialDate: Date;
		finalDate: Date;
	}) {
		this._id = params._id ?? null;
		this.employeeId = params.employeeId;
		this.initialDate = params.initialDate;
		this.finalDate = params.finalDate;
	}
}

export { Vocation };
