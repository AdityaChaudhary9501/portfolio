/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'arsenal-red': '#EF0107',
                'arsenal-white': '#FFFFFF',
                'arsenal-gold': '#9C824A',
                'arsenal-navy': '#023474',
                'arsenal-dark': '#0c0c0c', // Darker background for contrast
            },
            fontFamily: {
                'oswald': ['Oswald', 'sans-serif'],
                'rajdhani': ['Rajdhani', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
