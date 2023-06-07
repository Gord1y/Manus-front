import { Titillium_Web } from 'next/font/google'

import '@/src/styles/globals.scss'

const Titillium = Titillium_Web({
	subsets: ['latin'],
	weight: '400'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={Titillium.className}>{children}</body>
		</html>
	)
}
