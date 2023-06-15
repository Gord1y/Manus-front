'use client'

import { CreateCategory } from './CreateCategory'
import { UpdateCategory } from './UpdateCategory'
import { ICategory } from '@/src/store/category.interface'

const Categories = ({ categories }: { categories: ICategory[] }) => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='flex w-full justify-center text-2xl'>Categories</div>
			<div className='w-full max-w-screen-xl mx-auto flex flex-wrap gap-2 flex-row items-center justify-center mt-3'>
				<CreateCategory />

				{categories?.map((item: ICategory) => {
					return <UpdateCategory key={item.id} category={item} />
				})}
			</div>
		</div>
	)
}

export default Categories
