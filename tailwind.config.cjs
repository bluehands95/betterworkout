/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			title: ['Playfair Display', 'consolas']
		},
		colors: {
			tomato: '#EDEADE',
			alice: '#003153'
		}
	},
	plugins: []
};
