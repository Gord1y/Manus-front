'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { instance } from '@/src/api/api.interceptor'

function NavigationEvents() {
	const pathname = usePathname()
	const [recipe, setRecipe] = useState({} as any)
	useEffect(() => {
		const finc = async () => {
			const res = await instance.get(pathname)
			if (res.data) {
				setRecipe(res.data)
			}
		}
		finc()
	}, [pathname])

	return <>{recipe.name}</>
}

export default NavigationEvents
