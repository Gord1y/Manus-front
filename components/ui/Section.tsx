import cn from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface ISection {
	position: 'left' | 'right'
	className?: string
	img: StaticImageData
	title: string
	description: string
	secondaryText?: string
}
const Section: FC<ISection> = ({
	className,
	img,
	title,
	description,
	secondaryText,
	position
}) => {
	return (
		<section
			className={cn(
				'w-full flex flex-col-reverse',
				{
					'lg:flex-row-reverse': position === 'right',
					'lg:flex-row': position === 'left'
				},
				className
			)}
		>
			<Image
				width={3500}
				height={3500}
				src={img}
				alt='img'
				className='w-full lg:w-2/4'
			/>
			<div className='w-full lg:w-2/4 p-10 flex items-center justify-center flex-col gap-5'>
				<h1 className='text-3xl font-bold'>{title}</h1>
				<p className='text-lg max-w-2xl'>
					{description}
					{secondaryText && (
						<>
							<br />
							<br />
							{secondaryText}
						</>
					)}
				</p>
			</div>
		</section>
	)
}

export default Section
