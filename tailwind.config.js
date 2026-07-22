/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dev-bg': '#090D16',
                'dev-card': 'rgba(17, 24, 39, 0.7)',
                'dev-border': 'rgba(255, 255, 255, 0.08)',
                'brand-primary': '#6366F1', // Indigo
                'brand-accent': '#06B6D4', // Cyan
                'brand-emerald': '#10B981', // Emerald green
                'brand-purple': '#8B5CF6', // Purple
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}
