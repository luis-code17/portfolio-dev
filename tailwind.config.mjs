/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
      colors: {
        'bgColor': '#63e',
        'bistre': '#472C21',
				'yellow': '#FFD700',
				'orangee': '#FFB347',
				'silver': '#3C3C50',
				'lowGray': '#E0E0E0',
      },
    },
	},
	plugins: [],
}
