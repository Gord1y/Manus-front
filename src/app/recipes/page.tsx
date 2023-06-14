import Link from 'next/link'

import Recipes from './Recipes'
import { instance } from '@/src/api/api.interceptor'
import { ICategory } from '@/src/store/category.interface'
import { IRecipe } from '@/src/store/recipe.interface'

async function getCategories() {
	const categories = await instance<ICategory[]>({
		method: 'GET',
		url: 'category',
		params: {
			take: 10
		}
	})
	if (categories.data) {
		return categories.data
	}
}

async function getFirstRecipes() {
	const recipes = await instance<IRecipe[]>({
		method: 'GET',
		url: 'recipe',
		params: {
			take: 20,
			skip: 0
		}
	})
	if (recipes.data) {
		return recipes.data
	}
}

export default async function RecipesPage() {
	const categories = await getCategories()
	const recipes = await getFirstRecipes()
	return (
		<>
			<div className='w-full overflow-hidden'>
				<div className='flex w-full justify-center text-2xl'>
					Popular Categories
				</div>
				<div className='flex gap-2 items-center w-11/12 overflow-x-auto flex-wrap justify-center mx-auto mt-3'>
					{categories?.map((item: ICategory) => {
						return (
							<Link
								href={'category/' + item.slug}
								key={item.id}
								className='w-24 min-w-fit py-2 text-lg px-2 border border-black rounded-md hover:bg-black/10 text-center'
							>
								{item.name}
							</Link>
						)
					})}
					<Link
						href='/category'
						className='w-24 min-w-fit py-2 text-lg px-2 border border-black rounded-md hover:bg-black/10 text-center'
					>
						All categories
					</Link>
				</div>
			</div>
			{recipes && <Recipes data={recipes} />}
		</>
	)
}
