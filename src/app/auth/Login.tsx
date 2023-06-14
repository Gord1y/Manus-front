import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/src/components/ui/Button'
import Heading from '@/src/components/ui/Heading'
import Field from '@/src/components/ui/input/Field'
import { useActions } from '@/src/hooks/useActions'
import { useAuth } from '@/src/hooks/useAuth'
import { IUserLogin } from '@/src/store/user/user.interface'

export const Login: FC = () => {
	const { login } = useActions()
	const {
		register: registerForm,
		handleSubmit,
		formState: { errors }
	} = useForm<IUserLogin>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IUserLogin> = async data => {
		login(data)
	}
	const { isLoading } = useAuth()
	if (isLoading) return <div className='mt-5'>Loading...</div>
	return (
		<form onSubmit={handleSubmit(onSubmit)} className=''>
			<Heading className='text-center'>Login</Heading>
			<Field
				title='email'
				placeholder='email'
				type='text'
				{...registerForm('email', {
					required: 'email is required',
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'Invalid email address'
					}
				})}
				error={errors.email?.message}
			/>
			<Field
				title='password'
				placeholder='password'
				type='text'
				{...registerForm('password', {
					required: 'password is required',
					minLength: {
						value: 6,
						message: 'password must be at least 6 characters'
					}
				})}
				error={errors.password?.message}
			/>

			<Button type='submit' variant='white' className='mt-5'>
				Login
			</Button>
		</form>
	)
}
