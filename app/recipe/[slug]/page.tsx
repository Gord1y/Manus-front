import Image from 'next/image'

import img from '@/public/1.jpg'
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
	return (
		<>
			{recipe && (
				<>
					<div className='w-full text-center text-3xl md:text-5xl'>
						Recipe {recipe.name}
					</div>
					<Image
						src={recipe?.image || img}
						alt={recipe.name}
						className='w-11/12 md:w-2/4 mt-4 md:mt-8 mx-auto'
					/>
					{recipe.description && (
						<div className='w-full text-center text-xl md:text-3xl mt-4 md:mt-8'>
							Description:
							<br />
							{recipe.description}
						</div>
					)}
					{recipe.instructions && (
						<div className='w-full text-center text-xl md:text-3xl mt-4 md:mt-8'>
							How to make:
							<br />
							{recipe.instructions}
						</div>
					)}
					{recipe.ingredients.length > 0 && (
						<div className='w-full text-center text-xl md:text-3xl mt-4 md:mt-8'>
							Ingredients:
							<br />
							{recipe.ingredients.map(ingredient => (
								<div key={ingredient.name}>
									{ingredient.name} - {ingredient.count}
								</div>
							))}
						</div>
					)}
				</>
			)}
		</>
	)
}
