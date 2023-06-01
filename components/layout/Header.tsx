import cn from 'clsx'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface IHeader {
	title: string
	className?: string
}

const Header: FC<PropsWithChildren<IHeader>> = ({
	title,
	children,
	className
}) => {
	return (
		<header
			className={cn(
				'w-full py-3 sm:py-5 fixed bg-bg-color z-10 top-0 bg-slate-100',
				className
			)}
		>
			<div className='w-11/12 max-w-screen-xl flex justify-between items-center mx-auto text-lg sm:text-2xl'>
				<Link href='/'>{title}</Link>
				{children}
			</div>
		</header>
	)
}

export default Header
