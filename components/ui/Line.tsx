import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

export interface ILine {
	className?: string
}

export const Line: FC<PropsWithChildren<ILine>> = ({ className }) => {
	return (
		<div
			className={cn('w-full h-px bg-black mx-auto max-w-sm my-10', className)}
		/>
	)
}
