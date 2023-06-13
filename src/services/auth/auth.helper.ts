import Cookies from 'js-cookie'

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/src/constans/token.constants'
import { IAuthResponse, ITokens, IUser } from '@/src/store/user/user.interface'

export const getAccessToken = () => Cookies.get(ACCESS_TOKEN) || null

export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN) || null

export const getUser = () => {
	const user = localStorage.getItem('user')
	return user ? JSON.parse(user) : null
}

export const saveTokens = (data: ITokens) => {
	Cookies.set(ACCESS_TOKEN, data.accessToken)
	Cookies.set(REFRESH_TOKEN, data.refreshToken)
}

export const removeStorage = () => {
	Cookies.remove(ACCESS_TOKEN)
	Cookies.remove(REFRESH_TOKEN)
	localStorage.removeItem('user')
}

export const saveUser = (data: IUser) => {
	localStorage.setItem('user', JSON.stringify(data))
}

export const SaveToStorage = (data: IAuthResponse) => {
	saveUser(data.user)
	saveTokens(data)
}
