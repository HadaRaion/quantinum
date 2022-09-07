/** @type {import('next').NextConfig} */

const path = require('path');

const { i18n } = require('./next-i18next.config');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/_mixins.scss"; @import "styles/_variables.scss";`,
	},
	i18n,
};

module.exports = nextConfig;
