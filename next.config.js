/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	basePath: '/manus',
	assetPrefix: '/manus/',
	images: {
		domains: ['activedocks.top']
	},
	publicRuntimeConfig: {
		staticFolder: '/manus',
		basePath: '/manus'
	},
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
