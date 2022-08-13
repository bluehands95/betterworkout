/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			title: 'Roboto Slab',
			sans: 'Source Sans Pro'
		},
		colors: {
			raisin: '#272838',
			cultured: '#F9F8F8'
		}
	},
	plugins: []
};
