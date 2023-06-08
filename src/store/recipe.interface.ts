export interface IRecipe {
	id: number
	createdAt: string
	name: string
	slug: string
	ingredients: Ingredient[]
	description: string
	instructions: string
	images: string[]
	categorySlug: string
}

interface Ingredient {
	name: string
	count: string
}
