export interface IUser {
	id: number
	name: string
	surname: string
	email: string
	isAdmin: boolean
}

export interface IUserUpdate {
	name?: string
	surname?: string
	email?: string
	password?: string
}

export interface IUserLogin {
	email: string
	password: string
}

export interface IUserRegister {
	name: string
	surname: string
	email: string
	password: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export interface IinitalState {
	user: IUser | null
	isLoading: boolean
}
