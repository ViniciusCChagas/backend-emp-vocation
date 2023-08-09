interface IParamsUpdateEmployeeDto {
	id: string;
	name: string;
	role: string;
	admissionDate: Date;
}

interface IParamsCreateNewEmployeeDto {
	name: string;
	role: string;
	admissionDate: Date;
}

export { IParamsCreateNewEmployeeDto, IParamsUpdateEmployeeDto };
