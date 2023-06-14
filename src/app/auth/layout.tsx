import Providers from '@/src/providers/Providers'
import '@/src/styles/globals.scss'

export default function AuthLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Providers>{children}</Providers>
		</>
	)
}
