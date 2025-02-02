/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EF5B0C", // my custom primary color
          secondary: "#002E5B", // my custom secondary color
          accent: "#ffffff", // Customize other colors as needed
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
