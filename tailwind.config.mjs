/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
      colors: {
        'bgColor': ' #7B5BFF',
        'bistre': '#472C21',
				'yellow': '#FFD700',
				'orangee': '#FFB347',
				'silver': '#3C3C50',
				'lowGray': '#E0E0E0',
				'card1': '#3C3C50',
				'mid': '#bdb0a1',
      },
    },
	},
	plugins: [],
}
