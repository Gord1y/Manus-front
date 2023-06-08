import cn from 'clsx'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface IFooter {
	title: string
	className?: string
}

const Footer: FC<PropsWithChildren<IFooter>> = ({ title, className }) => {
	return (
		<footer
			className={cn(
				'flex w-11/12 flex-col max-w-screen-xl mx-auto pt-14 pb-6 gap-1 sm:gap-3',
				className
			)}
		>
			<div className='w-full h-px bg-black' />
			<div className='flex justify-between flex-row text-xs sm:text-sm'>
				<p className='text-grey'>© {title} 2023 All Rights Reserved.</p>
				<Link href='/policy'>Policy page</Link>
			</div>
		</footer>
	)
}

export default Footer