import { Button, Modal } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'

import { instance } from '@/src/api/api.interceptor'
import Field from '@/src/components/ui/input/Field'
import { IRecipe } from '@/src/store/recipe.interface'

export const UpdateRecipe = ({ recipe }: { recipe: IRecipe }) => {
	const [visible, setVisible] = useState(false)
	const showPopUp = () => setVisible(true)
	const hidePopUp = () => {
		setVisible(false)
	}
	const {
		register: create,
		handleSubmit,
		setError,
		control,
		formState: { errors }
	} = useForm<IRecipe>({
		mode: 'onChange',
		defaultValues: recipe
	})
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'ingredients'
	})

	const onSubmit: SubmitHandler<IRecipe> = async data => {
		await instance
			.put('/recipe/' + recipe.id, data)
			.then(hidePopUp)
			.catch(err => {
				if (err.response.data.message.includes('Category'))
					setError('categorySlug', {
						message: err.response.data.message
					})
				else if (err.response.data.message.includes('Slug'))
					setError('slug', {
						message: err.response.data.message
					})
				else if (err.response.data.message.includes('slug'))
					setError('slug', {
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
			<button
				className='bg-black text-white px-3 py-1 rounded-md'
				onClick={showPopUp}
			>
				Edit
			</button>
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
							title='Slug'
							placeholder='slug'
							type='text'
							{...create('slug', {
								required: 'This field is required'
							})}
							error={errors.slug?.message}
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
