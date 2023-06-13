import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex justify-center items-center w-full h-screen flex-col gap-3'>
			<h1>Page was not found</h1>
			<Link href='/'>Go back to home</Link>
		</div>
	)
}
