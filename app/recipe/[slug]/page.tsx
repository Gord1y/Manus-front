import { instance } from '@/src/api/api.interceptor'
import { IRecipe } from '@/src/store/recipe.interface'

async function getRecipeBySlug(slug: string) {
	const recipe = await instance<IRecipe>({
		method: 'GET',
		url: `/recipe/${slug}`
	})
	if (recipe.data) {
		return recipe.data
	}
}

export default async function RecipeBySlug({
	params
}: {
	params: { slug: string }
}) {
	const recipe = await getRecipeBySlug(params.slug)
	return <>{recipe?.name}</>
}
