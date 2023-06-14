import { Button, Modal } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { instance } from '@/src/api/api.interceptor'
import Field from '@/src/components/ui/input/Field'
import { ICategory, ICategoryUpdate } from '@/src/store/category.interface'

export const UpdateCategory = ({ category }: { category: ICategory }) => {
	const [visible, setVisible] = useState(false)
	const showPopUp = () => setVisible(true)
	const hidePopUp = () => {
		setVisible(false)
	}
	const {
		register: create,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm<ICategoryUpdate>({
		mode: 'onChange',
		defaultValues: {
			name: category.name,
			slug: category.slug
		}
	})

	const onSubmit: SubmitHandler<ICategoryUpdate> = async data => {
		await instance
			.put('/category/' + category.id, data)
			.then(hidePopUp)
			.catch(err => {
				if (err.response.data.message === 'Category name already exists')
					setError('name', {
						message: err.response.data.message
					})
				else
					setError('slug', {
						message: err.response.data.message
					})
			})
	}
	return (
		<>
			<button
				className='w-11/12 sm:w-1/4 min-w-fit text-center py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-black/10'
				onClick={showPopUp}
			>
				Update category <b>{category.name}</b>
			</button>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Modal
					blur
					aria-labelledby='modal-title'
					open={visible}
					onClose={hidePopUp}
				>
					<Modal.Header>
						<div className='text-xl'>
							Update category <b>{category.name}</b>
						</div>
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
							placeholder='Slug'
							type='text'
							{...create('slug', {
								required: 'This field is required'
							})}
							error={errors.slug?.message}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button auto flat color='error' onPress={hidePopUp}>
							Close
						</Button>
						<button onClick={handleSubmit(onSubmit)}>Update</button>
					</Modal.Footer>
				</Modal>
			</form>
		</>
	)
}
