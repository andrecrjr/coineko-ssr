/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  "jit":"true",
  theme: {
		extend: {
			fontFamily: {
				roboto: 'Roboto'
			},
			colors: {
				'purple-neko': '#9472d4',
				'dark-purple-neko': '#6769AD'
			}
		}
	},
  plugins: [],
}
