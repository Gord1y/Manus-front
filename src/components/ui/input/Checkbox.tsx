import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

export interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
	text?: string
}

const CheckBox = forwardRef<HTMLInputElement, ICheckBox>(
	({ text, className, ...rest }, ref) => (
		<div className='checkbox mt-5'>
			<label className={cn('flex text-black w-full gap-5', className)}>
				{text}
				<input type='checkbox' ref={ref} {...rest} />
			</label>
		</div>
	)
)

CheckBox.displayName = 'CheckBox'

export default CheckBox
