import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'

import { getSiteUrl } from '../config/url.config'
import { SITE_NAME } from '../constans/app.constants'

import Providers from '@/src/providers/Providers'
import '@/src/styles/globals.scss'

const Titillium = Titillium_Web({
	subsets: ['latin'],
	weight: '400'
})

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.ico'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['gordiy@gmail.com']
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={Titillium.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
