import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IMain {
	className?: string
}

const Main: FC<PropsWithChildren<IMain>> = ({ children, className }) => {
	return (
		<main className={cn('w-11/12 mx-auto mt-24 max-w-screen-xl', className)}>
			{children}
		</main>
	)
}

export default Main
