import Link from 'next/link'

import { instance } from '@/src/api/api.interceptor'

async function getRecipesByCategory(slug: string) {
	const recipes = await instance.get('category/' + slug)
	if (recipes.data) {
		return recipes.data
	}
}

export default async function CategoryBySlug({
	params
}: {
	params: { slug: string }
}) {
	const recipes = await getRecipesByCategory(params.slug)
	return (
		<>
			{recipes.map((el: any) => {
				return (
					<Link href={'/recipe/' + el.slug} key={el.id}>
						{el.name}
					</Link>
				)
			})}
		</>
	)
}
