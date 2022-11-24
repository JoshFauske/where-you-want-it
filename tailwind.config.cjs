/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1rem',
      },
		},
		extend: {
      translate: {
        'neg-2/4': '-50%',
       },
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
