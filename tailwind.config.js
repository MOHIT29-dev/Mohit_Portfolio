/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Enforcing strict B&W if needed, but Tailwind's default black/white are fine.
      },
      cursor: {
        // minimal cursors will be handled via component
      }
    },
  },
  plugins: [],
}
