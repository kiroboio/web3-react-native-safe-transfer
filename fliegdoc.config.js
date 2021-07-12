const { HTMLTheme } = require('fliegdoc');

module.exports = {
	baseUrl: '/dev',
	outDir: './docs',
	readme: './README.md',
	modules: [
		{
			package: './package.json',
			tsconfig: './tsconfig.json',
			mainFile: 'index.ts'
		}
	],
	title: 'Documentation', // appears in the page title and header
	externalLinks: {}, // e.g.: { "GitHub": "https://github.com/fliegwerk/fliegdoc" }
	hidePrivateMembers: true,
	theme: HTMLTheme
};