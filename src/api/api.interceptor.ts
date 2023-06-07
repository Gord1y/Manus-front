import axios from 'axios'

import { errorCatch, getContentType } from './api.helper'
import { getAccessToken, removeStorage } from '@/src/services/auth/auth.helper'

export const instance = axios.create({
	baseURL: 'http://localhost:4000/api',
	headers: getContentType()
})

instance.interceptors.request.use(async config => {
	const accessToken = getAccessToken()

	if (config && config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`
	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		if (
			error.response.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			errorCatch(error) === 'jwt must be provideed'
		) {
			removeStorage()
		}
		throw error
	}
)
