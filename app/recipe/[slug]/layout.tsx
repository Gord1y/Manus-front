import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Main from '@/src/components/layout/Main'
import '@/src/styles/globals.scss'

export default function RecipeLayout({
	children
}: {
	children: React.ReactNode
}) {
	const siteName = 'Manus'
	return (
		<>
			<Header />
			<Main className='max-w-screen-xl mx-auto'>{children}</Main>
			<Footer title={siteName} />
		</>
	)
}
