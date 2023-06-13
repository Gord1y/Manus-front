import { createAsyncThunk } from '@reduxjs/toolkit'

import {
	IAuthResponse,
	IUser,
	IUserLogin,
	IUserRegister,
	IUserUpdate
} from './user.interface'
import { errorCatch } from '@/src/api/api.helper'
import { removeStorage } from '@/src/services/auth/auth.helper'
import { AuthService } from '@/src/services/auth/auth.service'
import { UserService } from '@/src/services/user/user.service'

export const register = createAsyncThunk<IAuthResponse, IUserRegister>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main(data)
			return response
		} catch (e) {
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IUserLogin>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main(data)
			return response
		} catch (e) {
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	removeStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (e) {
			if (errorCatch(e) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const getProfile = createAsyncThunk(
	'user/profile',
	async (_, thunkApi) => {
		try {
			const response = await UserService.getProfile()
			return response
		} catch (e) {
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const updateProfile = createAsyncThunk<IUser, IUserUpdate>(
	'user/update',
	async (data, thunkApi) => {
		try {
			const response = await UserService.updateProfile(data)
			return response
		} catch (e) {
			return thunkApi.rejectWithValue(e)
		}
	}
)
