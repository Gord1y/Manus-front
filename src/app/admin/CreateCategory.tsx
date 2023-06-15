import { Button, Modal } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { instance } from '@/src/api/api.interceptor'
import Field from '@/src/components/ui/input/Field'
import { ICategoryCreate } from '@/src/store/category.interface'

export const CreateCategory = () => {
	const [visible, setVisible] = useState(false)
	const showPopUp = () => setVisible(true)
	const hidePopUp = () => {
		reset({
			name: ''
		})
		setVisible(false)
	}
	const {
		register: create,
		handleSubmit,
		reset,
		setError,
		formState: { errors }
	} = useForm<ICategoryCreate>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<ICategoryCreate> = async data => {
		await instance
			.post('/category', data)
			.then(hidePopUp)
			.catch(err => {
				setError('name', {
					message: err.response.data.message
				})
			})
	}
	return (
		<>
			<button
				className='w-11/12 sm:w-2/4 min-w-fit text-center py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-black/10'
				onClick={showPopUp}
			>
				Create new category
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
