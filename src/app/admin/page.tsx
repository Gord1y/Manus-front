import Link from 'next/link'
import { FC } from 'react'

import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Main from '@/src/components/layout/Main'
import Home from '@/src/components/pages/Home'

const HomePage: FC = () => {
	const siteName = 'Manus'
	return (
		<>
			<Header>
				<Link href='/recipes'>Open Recipes</Link>
			</Header>
			<Main>
				<Home />
			</Main>
			<Footer title={siteName} />
		</>
	)
}

export default HomePage
