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
          primary: "#400D51", // my custom primary color
          secondary: "#EF5B0C", // my custom secondary color
          accent: "#37cdbe", // Customize other colors as needed
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
