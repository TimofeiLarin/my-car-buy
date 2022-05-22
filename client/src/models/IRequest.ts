export interface IStatus {
  code: string;
}

export interface IPerson {
  lastName: string;
  firstName: string;
  secondName: string;
  driverLicense: string;
  email: string;
}

export interface IModel {
  id: number;
  name: string;
}

export interface IBrand {
  models: IModel[];
}

export interface IAuto {
  brands: IBrand[];
}

export interface ICity {
  code: string;
  name: string;
}

export interface ICities {
  cities: ICity[];
}

export interface IRequest {
  id: number;
  status: IStatus;
  person: IPerson;
  auto: {
    brand: string;
    model: IModel;
  }
  city: ICity;
  date: string;
}
