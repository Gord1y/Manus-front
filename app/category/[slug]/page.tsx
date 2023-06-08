'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { instance } from '@/src/api/api.interceptor'

function CategoryBySlug() {
	const pathname = usePathname()
	const router = useRouter()
	const [recipes, setRecipes] = useState([] as any)
	useEffect(() => {
		const fetchData = async () => {
			const res = (await instance.get(pathname).catch(err => {
				router.push('/404')
			})) as any
			setRecipes(res.data)
		}
		fetchData()
	}, [pathname, router])

	return (
		<>
			{recipes.map((el: any) => {
				return <div key={el.id}>{el.name}</div>
			})}
		</>
	)
}

export default CategoryBySlug
