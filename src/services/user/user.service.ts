import { saveUser } from '../auth/auth.helper'

import { instance } from '@/src/api/api.interceptor'
import { IUser, IUserUpdate } from '@/src/store/user/user.interface'

export const UserService = {
	async getProfile() {
		const response = await instance<IUser>({
			url: `/user/profile`,
			method: 'GET'
		})
		if (response.data) saveUser(response.data)
		return response.data
	},

	async updateProfile(data: IUserUpdate) {
		const response = await instance<IUser>({
			url: `/user/update`,
			method: 'PUT',
			data
		})
		if (response.data) saveUser(response.data)
		return response.data
	}
}
