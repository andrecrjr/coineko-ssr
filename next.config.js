/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.coingecko.com',
				port: ''
			}
		],
		unoptimized: true
	},
	experimental: {
		appDir: true
	}
};

module.exports = nextConfig;
