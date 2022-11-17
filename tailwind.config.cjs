/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
	darkMode: "class",
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				inter: ["inter", "serif"],
			},
			colors: {
				primaryColor: "#FF7900",
			}
		},
	},
	plugins: [],
};
