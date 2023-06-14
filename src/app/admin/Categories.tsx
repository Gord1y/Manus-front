import { ICategory } from '@/src/store/category.interface'

const Categories = ({ categories }: { categories: ICategory[] }) => {
	return (
		<div className='w-full overflow-hidden'>
			<div className='flex w-full justify-center text-2xl'>Categories</div>
			<div className='w-full max-w-screen-xl mx-auto flex flex-wrap gap-2 flex-row items-center justify-center mt-3'>
				<button className='w-11/12 sm:w-2/4 min-w-fit text-center py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-black/10'>
					add new category
				</button>
				{categories?.map((item: ICategory) => {
					return (
						<button
							key={item.id}
							className='w-11/12 sm:w-1/4 min-w-fit text-center py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-black/10'
						>
							Update category {item.name}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default Categories
