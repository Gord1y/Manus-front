import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IMain {
	className?: string
}

const Main: FC<PropsWithChildren<IMain>> = ({ children, className }) => {
	return <main className={cn('mt-12 lg:mt-24', className)}>{children}</main>
}

export default Main
