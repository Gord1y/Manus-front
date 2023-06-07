import Cookies from 'js-cookie'

import { IAuthResponse, ITokens, IUser } from '@/src/store/user.interface'

export const getAccessToken = () => Cookies.get('accessToken') || null

export const getRefreshToken = () => Cookies.get('refreshToken') || null

export const getUser = () => {
	const user = localStorage.getItem('user')
	return user ? JSON.parse(user) : null
}

export const saveTokens = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}

export const saveUser = (data: IUser) => {
	localStorage.setItem('user', JSON.stringify(data))
}

export const SaveToStorage = (data: IAuthResponse) => {
	saveUser(data.user)
	saveTokens(data)
}
