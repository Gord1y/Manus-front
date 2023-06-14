import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Main from '@/src/components/layout/Main'
import Providers from '@/src/providers/Providers'
import '@/src/styles/globals.scss'

export default function AdminLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Providers>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</Providers>
		</>
	)
}
