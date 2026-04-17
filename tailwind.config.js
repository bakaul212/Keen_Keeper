/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // এটি নিশ্চিত করে আপনার সব ফাইলে Tailwind কাজ করবে
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#0D3B31', // ফিগমার প্রাইমারি কালার
      },
    },
  },
  plugins: [],
}