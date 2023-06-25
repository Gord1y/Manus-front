'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuth } from './useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (user) {
			router.replace('/dashboard')
		}
	}, [router, user])
}
