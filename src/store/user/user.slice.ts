import { createSlice } from '@reduxjs/toolkit'

import {
	checkAuth,
	getProfile,
	login,
	logout,
	register,
	updateProfile
} from './user.actions'
import { IinitalState } from './user.interface'
import { getLocalStorage } from '@/src/utils/local-storage'

const initialState: IinitalState = {
	user: getLocalStorage('user'),
	isLoading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.pending, state => {
				state.isLoading = true
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(checkAuth.rejected, state => {
				state.isLoading = false
			})
			.addCase(getProfile.pending, state => {
				state.isLoading = true
			})
			.addCase(getProfile.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload
			})
			.addCase(getProfile.rejected, state => {
				state.isLoading = false
			})
			.addCase(updateProfile.pending, state => {
				state.isLoading = true
			})
			.addCase(updateProfile.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload
			})
	}
})
