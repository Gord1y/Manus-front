'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { instance } from '@/src/api/api.interceptor'

interface ICategory {
	id: number
	name: string
	slug: string
}
function RecipesPage() {
	const [categories, setCategories] = useState<ICategory[]>([
		{ name: 'category', slug: '', id: 0 }
	])
	useEffect(() => {
		const fetchData = async () => {
			const categories = await instance.get('category/all')
			if (categories.data) {
				setCategories(categories.data)
			}
		}
		fetchData()
	}, [])
	return (
		<div className='w-full overflow-hidden'>
			<div className='flex w-full justify-center text-2xl'>Categories</div>
			<div className='flex gap-2 items-center w-11/12 overflow-x-auto flex-wrap justify-center mx-auto mt-3'>
				{categories.map(el => {
					return (
						<Link
							href={'category/' + el.slug}
							key={el.id}
							className='w-24 min-w-fit py-2 text-lg px-2 border border-black rounded-md hover:bg-gray-200 text-center'
						>
							{el.name}
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default RecipesPage
