import Link from 'next/link'

import { instance } from '@/src/api/api.interceptor'

interface ICategory {
	id: number
	name: string
	slug: string
}

async function getCategories() {
	const categories = await instance<ICategory[]>({
		method: 'GET',
		url: 'category/all'
	})
	if (categories.data) {
		return categories.data
	}
}

export default async function Category() {
	const categories = await getCategories()
	return (
		<div>
			{categories?.map((item: ICategory) => {
				return (
					<Link href={'/category/' + item.slug} key={item.id}>
						{item.name}
					</Link>
				)
			})}
		</div>
	)
}
