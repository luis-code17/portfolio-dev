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
				'orange': '#EE8700',
      },
    },
	},
	plugins: [],
}
