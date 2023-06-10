'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import img from '@/public/1.jpg'
import { instance } from '@/src/api/api.interceptor'
import { Line } from '@/src/components/ui/Line'
import { IRecipe } from '@/src/store/recipe.interface'

const Recipes = ({ data }: { data: IRecipe[] }) => {
	const [recipes, setRecipes] = useState<IRecipe[]>(data)
	const [hasMore, setHasMore] = useState<boolean>(true)
	const [search, setSearch] = useState('')

	const getMoreRecipes = async () => {
		const res = await instance<IRecipe[]>({
			method: 'GET',
			url: 'recipe',
			params: {
				take: 20,
				skip: recipes.length,
				find: search
			}
		})
		if (res.status === 200) {
			setRecipes([...recipes, ...res.data])

			if (res.data.length < 20 || res.data.length === 0) setHasMore(false)
		}
	}

	useEffect(() => {
		const searchRecipes = async () => {
			const res = await instance<IRecipe[]>({
				method: 'GET',
				url: 'recipe',
				params: {
					take: 20,
					find: search,
					skip: 0
				}
			})
			if (res.status === 200) setRecipes(res.data)

			if (res.data.length === 0) setHasMore(false)
		}
		searchRecipes()
	}, [search])

	return (
		<div className='w-full mt-5'>
			<div className='text-2xl w-full text-center'>Recipes</div>
			<input
				type='text'
				value={search}
				onChange={e => {
					setSearch(e.currentTarget.value)
				}}
				className='w-11/12 max-w-xs mt-2 px-3 py-1 border border-black rounded-md mx-auto block'
				placeholder='Search...'
			/>
			<InfiniteScroll
				dataLength={recipes.length}
				next={getMoreRecipes}
				hasMore={hasMore}
				loader={
					<div className='mt-2 w-full text-center text-2xl text-red-300'>
						Loading...
					</div>
				}
				endMessage={
					<div className='w-full text-center text-2xl'>
						Nothing more to show...
					</div>
				}
				className='w-11/12 mx-auto flex-col flex justify-center align-center gap-2 mt-5'
			>
				{recipes.map((data, index) => (
					<div key={data.id}>
						<Link
							href={`/recipe/${data.slug}`}
							className={cn('flex w-full flex-col gap-5', {
								'md:flex-row gap-0': index % 2 === 0,
								'md:flex-row-reverse gap-0': index % 2 !== 0
							})}
						>
							<Image
								src={data.image || img}
								alt={''}
								className='w-full md:w-2/4 h-fit'
							/>
							<div className='flex flex-col gap-1 justify-center items-center w-full md:w-2/4'>
								<p className='text-2xl md:text-5xl'>{data.name}</p>
								<p className='text-lg md:text-2xl'>{data.description}</p>
							</div>
						</Link>
						<Line className='my-2 md:my-8' />
					</div>
				))}
			</InfiniteScroll>
		</div>
	)
}

export default Recipes
