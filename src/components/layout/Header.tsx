import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import logo from '@/public/ManusLogoSmall.png'

interface IHeader {
	className?: string
}

const Header: FC<PropsWithChildren<IHeader>> = ({ children, className }) => {
	return (
		<header
			className={cn(
				'w-screen py-3 sm:py-5 fixed bg-bg-color z-10 top-0 bg-background',
				className
			)}
		>
			<div className='w-11/12 max-w-screen-xl flex justify-between items-center mx-auto text-lg sm:text-2xl'>
				<Link href='/'>
					<Image src={logo} alt='logo' className='w-20 sm:w-32' />
				</Link>
				{children}
			</div>
		</header>
	)
}

export default Header
