module.exports = {
	plugins: [
			require('autoprefixer')({
					overrideBrowserslist: ['last 2 versions', 'Chrome >= 60', 'Firefox >= 60']
			}),
	],
};