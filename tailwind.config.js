/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			fontFamily: {
				mono: ["Inconsolata", "monospace"],
			},
			fontSize: {
				xxs: "0.6rem", // Customize the size as per your need
			},
		},
		// Custom colors from style guide
		colors: {
			custom_neutral: {
				0: "hsl(0, 0%, 100%)",
				300: "hsl(252, 6%, 83%)",
				500: "hsl(245, 15%, 58%)",
				700: "hsl(245, 19%, 35%)",
				900: "hsl(248, 70%, 10%)",
			},
			custom_orange: {
				500: "hsl(7, 88%, 67%)",
				700: "hsl(7, 71%, 60%)",
			},
		},
	},
	plugins: [],
};
