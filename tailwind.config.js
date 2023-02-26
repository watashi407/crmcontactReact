/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        
        'your-image': "url('../public/New Project.png')",
      }),
    },

  },
  plugins: [],
}
