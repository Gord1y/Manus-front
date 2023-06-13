import { Metadata } from 'next'
import Link from 'next/link'
import { FC } from 'react'

import { SITE_DESCRIPTION } from '../constans/app.constants'

import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Main from '@/src/components/layout/Main'
import Home from '@/src/components/pages/Home'

export const metadata: Metadata = {
	description: SITE_DESCRIPTION
}

const HomePage: FC = () => {
	return (
		<>
			<Header>
				<Link href='/recipes'>Open Recipes</Link>
			</Header>
			<Main>
				<Home />
			</Main>
			<Footer />
		</>
	)
}

export default HomePage
