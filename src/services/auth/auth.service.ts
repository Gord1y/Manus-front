import { SaveToStorage, getRefreshToken } from './auth.helper'
import { instance } from '@/src/api/api.interceptor'
import { IAuthResponse, IUserLogin } from '@/src/store/user/user.interface'

export const AuthService = {
	async main(data: IUserLogin) {
		const response = await instance<IAuthResponse>({
			url: `/auth/login`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) SaveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = getRefreshToken()

		const response = await instance<IAuthResponse>({
			url: `/auth/update-tokens`,
			method: 'POST',
			data: { refreshToken }
		})

		if (response.data.accessToken) SaveToStorage(response.data)

		return response
	}
}
