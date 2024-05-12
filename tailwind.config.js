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
					'50': '#f3f2ff',
					'100': '#e8e8ff',
					'200': '#d4d4ff',
					'300': '#b3b2ff',
					'400': '#8d86ff',
					'500': '#6855fd',
					'600': '#5431f6',
					'700': '#4620e1',
					'800': '#3a1abd',
					'900': '#32179b',
					'950': '#1b0c69',
				},
				'dark-purple-neko': '#383865',
				'black-neko': '#1c1c33'
			}
		}
	},
	plugins: []
};
