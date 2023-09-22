/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}'
	],
	jit: 'true',
	theme: {
		extend: {
			fontFamily: {
				roboto: 'Roboto'
			},
			colors: {
				'light-gray-neko': '#E2E3FE',
				'purple-neko': {
					100: '#e8e8ff',
					200: '#d1d1fe',
					300: '#b9b9fe',
					400: '#a2a2fd',
					500: '#8b8bfd',
					600: '#6f6fca',
					700: '#535398',
					800: '#383865',
					900: '#1c1c33'
				},
				'dark-purple-neko': '#383865',
				'black-neko': '#1c1c33'
			}
		}
	},
	plugins: []
};
