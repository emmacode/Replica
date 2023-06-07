//  @type {import('tailwindcss').Config} 
module.exports = {
    content: [
        "./src/**/*.js",
        "./src/views/Home/**/*.{js,jsx}",
        "./src/views/Profile/**/*.{js,jsx}",
        "./src/views/Auth/**/*.js",
        "./src/views/LandingPage/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}