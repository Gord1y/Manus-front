import Providers from '@/src/providers/Providers'

export default function AdminLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <Providers>{children}</Providers>
}
