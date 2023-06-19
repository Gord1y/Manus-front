import Footer from '@/src/components/layout/Footer'
import Header from '@/src/components/layout/Header'
import Main from '@/src/components/layout/Main'
import { LogoutButton } from '@/src/components/layout/logoutbutton'
import Providers from '@/src/providers/Providers'

export default function DashboardLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Providers>
				<Header>
					<LogoutButton />
				</Header>
				<Main>{children}</Main>
				<Footer />
			</Providers>
		</>
	)
}
