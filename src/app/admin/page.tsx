import Categories from './Categories'
import Recipes from './Recipes'
import { instance } from '@/src/api/api.interceptor'
import { ICategory } from '@/src/store/category.interface'
import { IRecipe } from '@/src/store/recipe.interface'

async function getAllCategories() {
	const categories = await instance<ICategory[]>({
		method: 'GET',
		url: 'category/all'
	})
	if (categories.data) {
		return categories.data
	}
}

async function getAllRecipes() {
	const categories = await instance<IRecipe[]>({
		method: 'GET',
		url: 'recipe/all'
	})
	if (categories.data) {
		return categories.data
	}
}

export default async function AdminPage() {
	const categories = await getAllCategories()
	const recipes = await getAllRecipes()
	return (
		<>
			<h1 className='w-full text-center text-2xl'>Admin Panel</h1>
			{categories && <Categories categories={categories} />}
			{recipes && <Recipes recipes={recipes} />}
		</>
	)
}
