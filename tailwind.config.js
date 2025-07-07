/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode using a class (this is the default behavior)
  theme: {
    extend: {
      colors: {
        // Add your dark mode colors here if you need custom colors
      },
    },
  },
  plugins: [],
}
