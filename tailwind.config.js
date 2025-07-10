/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			fontFamily: {
				mono: ["Inconsolata", "monospace"],
			},
		},
	},
	plugins: [],
};
