'use client'

import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import img from '@/public/1.jpg'
import { Line } from '@/src/components/ui/Line'
import { IRecipe } from '@/src/store/recipe.interface'

const Recipes = ({ recipes }: { recipes: IRecipe[] }) => {
	const [search, setSearch] = useState('')
	return (
		<div className='w-full overflow-hidden'>
			<div className='text-2xl w-full text-center'>Recipes</div>
			<input
				type='text'
				value={search}
				onChange={e => {
					setSearch(e.currentTarget.value)
				}}
				className='w-11/12 max-w-xs mt-2 px-3 py-1 border border-black rounded-md mx-auto block'
				placeholder='Search by name...'
			/>
			<div className='w-11/12 max-w-screen-md mx-auto flex-col flex justify-center align-center gap-2 mt-5'>
				{recipes
					.filter(data => data.name.includes(search))
					.map((data, index) => (
						<div key={data.id}>
							<div
								className={cn('flex w-full flex-col gap-5', {
									'md:flex-row gap-0': index % 2 !== 0,
									'md:flex-row-reverse gap-0': index % 2 === 0
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
									<button className='bg-black text-white px-3 py-1 rounded-md'>
										Edit
									</button>
								</div>
							</div>
							<Line className='my-1 md:my-4' />
						</div>
					))}
			</div>
		</div>
	)
}

export default Recipes
