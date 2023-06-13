import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ title, placeholder, error, className, type = 'text', style, ...rest },
		ref
	) => (
		<div className={cn('mt-5', className)} style={style}>
			<label>
				<span className='text-lg'>{title ? title : placeholder}</span>
				<input
					placeholder={placeholder}
					type={type}
					ref={ref}
					className={cn(
						'mt-1 px-4 py-2 w-full outline-none border border-grey focus:border-black rounded transition-all',
						{
							'border-red-400': !!error
						}
					)}
					{...rest}
				/>
			</label>
			{error && <div className='mt-1 text-red-400'>{error}</div>}
		</div>
	)
)

Field.displayName = 'Field'

export default Field
