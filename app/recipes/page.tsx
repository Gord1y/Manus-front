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

export default async function RecipesPage() {
	const categories = await getCategories()
	return (
		<div className='w-full overflow-hidden'>
			<div className='flex w-full justify-center text-2xl'>Categories</div>
			<div className='flex gap-2 items-center w-11/12 overflow-x-auto flex-wrap justify-center mx-auto mt-3'>
				{categories?.map((item: ICategory) => {
					return (
						<Link
							href={'category/' + item.slug}
							key={item.id}
							className='w-24 min-w-fit py-2 text-lg px-2 border border-black rounded-md hover:bg-gray-200 text-center'
						>
							{item.name}
						</Link>
					)
				})}
			</div>
		</div>
	)
}
