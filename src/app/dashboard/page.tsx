'use client'

import Link from 'next/link'

import { useAuth } from '@/src/hooks/useAuth'

export default function Dashboard() {
	const { user } = useAuth()
	return (
		<>
			<div className='flex items-center flex-col'>
				<h1 className='text-3xl'>User</h1>
				<div className='flex flex-col gap-1'>
					<p>Email: {user?.email}</p>
					<p>Name: {user?.name}</p>
					<p>Surname:{user?.surname}</p>
				</div>
				<div className='rounded border border-black py-1 px-3 mt-2'>
					Change profile
				</div>
				{user?.isAdmin ? (
					<>
						<Link
							href='/admin'
							className='rounded border border-black py-1 px-3 mt-2'
						>
							Admin Panel
						</Link>
					</>
				) : (
					<>
						<button className='rounded border border-black py-1 px-3 mt-2'>
							Suggest a new recipe
						</button>
					</>
				)}
			</div>
		</>
	)
}
