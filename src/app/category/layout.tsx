import Link from 'next/link'

import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Main from '@/src/components/layout/Main'
import '@/src/styles/globals.scss'

export default function CategoryLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header>
				<Link href='/recipes'>All recipes</Link>
			</Header>
			<Main>{children}</Main>
			<Footer />
		</>
	)
}
