import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Main from '@/src/components/layout/Main'
import '@/src/styles/globals.scss'

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	)
}
