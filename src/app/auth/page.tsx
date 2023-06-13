'use client'

import { useRouter } from 'next/navigation'

import { Login } from './Login'
import { useAuthRedirect } from '@/src/hooks/useAuthRedirect'

export default function Auth() {
	useAuthRedirect()
	const router = useRouter()
	return (
		<div className='flex w-full h-screen'>
			<div className='flex flex-col w-11/12 max-w-md m-auto h-fit rounded-lg bg-white shadow p-8 relative animate-scaleIn'>
				<button
					type='button'
					className=' absolute left-5 top-5'
					onClick={() => router.back()}
				>
					← Back
				</button>
				<Login />
				{/* <button
					className='mt-5 text-grey w-fit'
					onClick={() => router.push('/forgot-password')}
				>
					forgot password
				</button> */}
			</div>
		</div>
	)
}
