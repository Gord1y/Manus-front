import cn from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'dark' | 'white' | 'black'
}

const Button: FC<IButton> = ({
	children,
	className,
	variant = 'black',
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(
				'rounded-xl shadow px-5 py-1 sm:px-10 sm:py-3 font-large text-lg',
				{
					'border border-sm border-black bg-white text-black':
						variant === 'white',
					'bg-black text-white': variant === 'dark',
					'shadow-none border-none bg-transparent text-black':
						variant === 'black'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
