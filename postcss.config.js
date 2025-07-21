module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js',
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    },
    autoprefixer: {},
  }
}
