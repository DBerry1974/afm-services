/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"brand-primary": "#0a90fb",
				"brand-secondary": "#545454",
			  },
		},
	},
	plugins: [],
}
 