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
				'purple-neko': '#8B8BFD',
				'dark-purple-neko': '#9092D5',
				'black-neko': '#303030'
			}
		}
	},
	plugins: []
};

/*#E2E3FE, #9DA6FE, #9B9EFA, 
#9B9EFA, #9A9BFA, #979AEF, 
#9092D5, #8B8BFD, #707070, #606060, 
#505050, #404040, #303030, #000000, #000000, #000000*/
