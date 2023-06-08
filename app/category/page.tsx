'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { instance } from '@/src/api/api.interceptor'

function Category() {
	const [categories, setCategories] = useState([])
	useEffect(() => {
		const finc = async () => {
			const res = await instance.get('category/all')
			if (res.data) {
				setCategories(res.data)
			}
		}
		finc()
	}, [])

	return (
		<div>
			{categories.map((item: any) => {
				return (
					<Link href={'/category/' + item.slug} key={item.id}>
						{item.name}
					</Link>
				)
			})}
		</div>
	)
}

export default Category
