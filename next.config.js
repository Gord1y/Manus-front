/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	basePath: '/manus',

	async redirects() {
		return [
			{
				source: '/',
				destination: '/manus/',
				permanent: true,
				basePath: false
			}
		]
	}
}

module.exports = nextConfig
