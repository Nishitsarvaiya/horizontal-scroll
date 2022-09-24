/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.resolve.alias['components'] = path.join(__dirname, 'components');
		config.resolve.alias['styles'] = path.join(__dirname, 'styles');
		config.resolve.alias['public'] = path.join(__dirname, 'public');
		config.resolve.alias['hooks'] = path.join(__dirname, 'hooks');
		config.resolve.alias['assets'] = path.join(__dirname, 'assets');
		return config;
	},
	images: {
		loader: 'default',
		domains: ['localhost', 'images.unsplash.com'],
	},
};

module.exports = nextConfig;
