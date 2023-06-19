'use client'

import { useActions } from '@/src/hooks/useActions'

export const LogoutButton = () => {
	const { logout } = useActions()
	return <button onClick={logout}>Logout</button>
}
