// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Nico Salvador',
	siteUrl: 'https://www.salvadornico.com',
	plugins: [
		{ use: 'gridsome-plugin-pug' },
		{ use: 'gridsome-plugin-typescript', },
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				purgeConfig: {},
				presetEnvConfig: {},
				shouldPurge: true,
				shouldImport: true,
				shouldTimeTravel: true,
				shouldPurgeUnusedKeyframes: true,
			}
		},
  ]
}
