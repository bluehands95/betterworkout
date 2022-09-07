/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			title: ['Playfair Display', 'consolas']
		},
		colors: {
			tomato: '#FE654F',
			alice: '#F9FDFF'
		}
	},
	plugins: []
};
