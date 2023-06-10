'use client'

import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { instance } from '@/src/api/api.interceptor'
import { IRecipe } from '@/src/store/recipe.interface'

const Recipes = ({ data, slug }: { data: IRecipe[]; slug: any }) => {
	const [recipes, setRecipes] = useState<IRecipe[]>(data)
	const [hasMore, setHasMore] = useState<boolean>(true)
	const [search, setSearch] = useState('')

	const getMoreRecipes = async () => {
		const res = await instance<IRecipe[]>({
			method: 'GET',
			url: 'category/' + slug,
			params: {
				take: 10,
				skip: recipes.length,
				find: search
			}
		})
		if (res.status === 200) {
			setRecipes([...recipes, ...res.data])

			if (res.data.length < 10 || res.data.length === 0) setHasMore(false)
		}
	}

	useEffect(() => {
		const searchRecipes = async () => {
			const res = await instance<IRecipe[]>({
				method: 'GET',
				url: 'category/' + slug,
				params: {
					take: 10,
					find: search,
					skip: 0
				}
			})
			if (res.status === 200) setRecipes(res.data)

			if (res.data.length === 0) setHasMore(false)
		}
		searchRecipes()
	}, [search, slug])

	return (
		<>
			da
			<input
				type='text'
				value={search}
				onChange={e => {
					setSearch(e.currentTarget.value)
				}}
			/>
			<InfiniteScroll
				dataLength={recipes.length}
				next={getMoreRecipes}
				hasMore={hasMore}
				loader={<h3> Loading...</h3>}
				endMessage={<h4>Nothing to show</h4>}
			>
				{recipes.map(data => (
					<div key={data.id}>
						<div className='back'>
							<strong> {data.id}</strong> {data.name}
						</div>
						{data.description}
					</div>
				))}
			</InfiniteScroll>
		</>
	)
}

export default Recipes
