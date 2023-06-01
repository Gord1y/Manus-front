import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'

import '@/styles/globals.scss'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const siteName = 'Manus'
	return (
		<html lang='en'>
			<body>
				<Header title={siteName} />
				<Main>{children}</Main>
				<Footer title={siteName} />
			</body>
		</html>
	)
}
