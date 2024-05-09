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
	}
};

module.exports = nextConfig;
