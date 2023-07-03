/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cloudflare-ipfs.com"],
	},
	reactStrictMode: false,
	experimental: {
		serverActions: true
	}
};

module.exports = nextConfig;
