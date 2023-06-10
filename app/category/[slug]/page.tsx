import Recipes from './RecipesByCategorySlug'
import { instance } from '@/src/api/api.interceptor'
import { ICategory } from '@/src/store/category.interface'
import { IRecipe } from '@/src/store/recipe.interface'

async function getFirstRecipesByCategory(slug: string) {
	const recipes = await instance<IRecipe[]>({
		method: 'GET',
		url: 'category/' + slug,
		params: {
			take: 10,
			skip: 0
		}
	})
	if (recipes.data) {
		return recipes.data
	}
}

async function getCategoryBySlug(slug: string) {
	const res = await instance<ICategory[]>({
		method: 'GET',
		url: 'category',
		params: {
			find: slug,
			take: 1,
			skip: 0
		}
	})
	if (res.data) {
		return res.data
	}
}

export default async function CategoryBySlug({
	params
}: {
	params: { slug: string }
}) {
	const recipes = await getFirstRecipesByCategory(params.slug)
	const category = await getCategoryBySlug(params.slug)
	return (
		<>
			{category && (
				<div className='text-3xl text-center w-full'>
					Category: {category[0].name}
				</div>
			)}
			{recipes && <Recipes data={recipes} slug={params.slug} />}
		</>
	)
}
