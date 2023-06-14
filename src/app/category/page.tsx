import Link from 'next/link'

import { instance } from '@/src/api/api.interceptor'
import { ICategory } from '@/src/store/category.interface'

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
		<div className='w-full overflow-hidden'>
			<div className='flex w-full justify-center text-2xl'>Categories</div>
			<div className='w-full max-w-screen-lg mx-auto flex flex-wrap gap-2 flex-row items-center justify-center mt-3'>
				{categories?.map((item: ICategory) => {
					return (
						<Link
							href={'category/' + item.slug}
							key={item.id}
							className='w-1/4 min-w-fit text-center py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-black/10'
						>
							{item.name}
						</Link>
					)
				})}
			</div>
		</div>
	)
}
