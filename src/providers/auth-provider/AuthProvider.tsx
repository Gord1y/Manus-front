'use client'

import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

import { protectedRoutes } from './protected-routes'
import NotFound from '@/src/app/not-found'
import { ADMIN_PANEL_URL } from '@/src/config/url.config'
import { useActions } from '@/src/hooks/useActions'
import { useAuth } from '@/src/hooks/useAuth'
import {
	getAccessToken,
	getRefreshToken
} from '@/src/services/auth/auth.helper'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()

	const pathname = usePathname()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) {
			checkAuth()
		}
	}, [checkAuth])

	useEffect(() => {
		const refreshToken = getRefreshToken()
		if (!refreshToken && user) {
			logout()
		}
	}, [logout, pathname, user])

	const router = useRouter()

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)
	const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

	if (!isAdminRoute && !isProtectedRoute) return <>{children}</>

	if (user?.isAdmin) return <>{children}</>
	if (user && isProtectedRoute) return <>{children}</>

	if (user && isAdminRoute) <NotFound />

	return null
}
export default AuthProvider
