/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				inter: ["inter", "serif"],
			},
		},
	},
	plugins: [],
};
