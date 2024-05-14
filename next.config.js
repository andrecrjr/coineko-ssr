/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.coinpaprika.com',
				port: ''
			}
		],
		unoptimized: true
	}
};

module.exports = nextConfig;
