import { Titillium_Web } from 'next/font/google'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'

import '@/styles/globals.scss'

const Titillium = Titillium_Web({
	subsets: ['latin'],
	weight: '400'
})

export default function PolicyLayout({
	children
}: {
	children: React.ReactNode
}) {
	const siteName = 'Manus'
	return (
		<>
			<Header title={siteName} />
			<Main>{children}</Main>
			<Footer title={siteName} />
		</>
	)
}
