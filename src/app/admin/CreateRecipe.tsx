import { Button, Modal } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'

import img from '@/public/1.jpg'
import { instance } from '@/src/api/api.interceptor'
import { Line } from '@/src/components/ui/Line'
import Field from '@/src/components/ui/input/Field'
import { IRecipe } from '@/src/store/recipe.interface'

export const CreateRecipe = () => {
	const [visible, setVisible] = useState(false)
	const showPopUp = () => setVisible(true)
	const hidePopUp = () => {
		reset({
			name: '',
			description: '',
			categorySlug: '',
			instructions: '',
			ingredients: []
		})
		setVisible(false)
	}
	const {
		register: create,
		handleSubmit,
		reset,
		setError,
		control,
		formState: { errors }
	} = useForm<IRecipe>({
		mode: 'onChange'
	})
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'ingredients'
	})

	const onSubmit: SubmitHandler<IRecipe> = async data => {
		await instance
			.post('/recipe', data)
			.then(hidePopUp)
			.catch(err => {
				if (err.response.data.message.includes('Category'))
					setError('categorySlug', {
						message: err.response.data.message
					})
				else
					setError('name', {
						message: err.response.data.message
					})
			})
	}
	return (
		<>
			<div>
				<div className='flex w-full flex-col md:flex-row gap-0'>
					<Image src={img} alt={''} className='w-full md:w-2/4 h-fit' />
					<div className='flex flex-col gap-1 justify-center items-center w-full md:w-2/4'>
						<p className='text-xl md:text-2xl'>Create new delicious recipe</p>
						<button
							className='bg-black text-white px-3 py-1 rounded-md'
							onClick={showPopUp}
						>
							Create
						</button>
					</div>
				</div>
				<Line className='my-1 md:my-4' />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Modal
					blur
					aria-labelledby='modal-title'
					open={visible}
					onClose={hidePopUp}
				>
					<Modal.Header>
						<div className='text-xl'>Create new category</div>
					</Modal.Header>
					<Modal.Body>
						<Field
							title='Name'
							placeholder='name'
							type='text'
							{...create('name', {
								required: 'This field is required'
							})}
							error={errors.name?.message}
						/>
						<Field
							title='Description'
							placeholder='description'
							type='text'
							{...create('description', {
								required: 'This field is required'
							})}
							error={errors.description?.message}
						/>
						<Field
							title='Instructions'
							placeholder='instructions'
							type='text'
							{...create('instructions')}
							error={errors.instructions?.message}
						/>
						<Field
							title='Category slug'
							placeholder='categorySlug'
							type='text'
							{...create('categorySlug', {
								required: 'This field is required'
							})}
							error={errors.categorySlug?.message}
						/>
						<h1 className='text-center w-full text-xl'>Ingredients</h1>
						{fields.map((field, index) => (
							<div key={field.id}>
								<Field
									title='Ingredient name'
									placeholder='Ingredient name'
									{...create(`ingredients.${index}.name`, {
										required: 'This field is required'
									})}
									className='mt-0'
									error={errors.ingredients?.[index]?.name?.message}
								/>
								<Field
									title='Ingredient count'
									placeholder='Ingredient count'
									{...create(`ingredients.${index}.count`, {
										required: 'This field is required'
									})}
									error={errors.ingredients?.[index]?.count?.message}
								/>
								<button
									type='button'
									onClick={() => remove(index)}
									className='bg-red-300 text-white px-3 py-1 rounded-md mt-2'
								>
									Remove
								</button>
							</div>
						))}
						<button
							type='button'
							onClick={() => append({ name: '', count: '' })}
							className='bg-green-300 text-white px-3 py-1 rounded-md mt-2 w-fit mx-auto'
						>
							Add Ingredient
						</button>
					</Modal.Body>
					<Modal.Footer>
						<Button auto flat color='error' onPress={hidePopUp}>
							Close
						</Button>
						<button onClick={handleSubmit(onSubmit)}>Create</button>
					</Modal.Footer>
				</Modal>
			</form>
		</>
	)
}
