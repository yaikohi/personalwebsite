/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				firacode: ['Fira Code', 'sans-serif-mono'],
				ptsans: ['PT Sans', 'sans-serif'],
				sourcesans: ['Source Sans Pro', 'sans-serif'],
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
