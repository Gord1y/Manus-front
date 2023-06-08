import { instance } from '@/src/api/api.interceptor'

async function getRecipeBySlug(slug: string) {
	const recipe = await instance.get('recipe/' + slug)
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
	return <>{recipe.name}</>
}
