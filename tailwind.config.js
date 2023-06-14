/** @type {import('tailwindcss').Config} */

const twcolors = require('tailwindcss/colors')
const colors = {
	...twcolors,
	background: '#F2EDE7'
}

module.exports = {
	content: ['./app/**/*.{js,ts,tsx,jsx,mdx}', './src/**/*.{ts,tsx}'],
	theme: {
		colors,
		extend: {
			spacing: {
				21: '5.25rem',
				22: '5.5rem'
			},
			fontSize: {
				xxs: '0.65rem',
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			}
		}
	},
	plugins: []
}
