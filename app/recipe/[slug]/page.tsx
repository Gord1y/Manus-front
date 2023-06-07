'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { instance } from '@/src/api/api.interceptor'

function NavigationEvents() {
	const pathname = usePathname()
	const router = useRouter()
	const [recipe, setRecipe] = useState({} as any)
	useEffect(() => {
		const finc = async () => {
			const res = (await instance.get(pathname).catch(err => {
				router.push('/404')
			})) as any
			setRecipe(res.data)
		}
		finc()
	}, [pathname, router])

	return <>{recipe?.name}</>
}

export default NavigationEvents
