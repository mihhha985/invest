export interface IUserRegister{
    firstName: string;
    lastName: string;
    secondName?: string;
    email: string;
    phone: string;
    password: string;
    avatar?: string;
    activationLink?: string;
}

export interface IUser{
    id: number;
    firstName: string;
    lastName: string;
    secondName?: string;
    email: string;
}

export interface IUserToken{
    token: string;
    user: IUser;
}

export interface IUserLogin{
    email: string;
    password: string;
}