/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			{
			  mytheme: {
				"primary": "#f0f8ff",
				"secondary": "#000",
				"accent": "#000",
				"neutral": "#000",
				"base-100": "#2C3145",
				"info": "#fff",
				"color": "#fff",
				"bg-gray-100": "#000",
				
			  },
			  modeLight:{
				"primary": "#ebebeb",
				"secondary": "#f6d860",
				"accent": "#37cdbe",
				"neutral": "#3d4451",
				"base-100": "#ffffff",
				"info": "#7914f1",
				"color": "#000",
				"modeDark": {
					"background-color": "#000"
				}
			  },
			},
			"light",
			"cupcake",
		  ],
	},

	plugins: [require('daisyui')]
};

module.exports = config;
