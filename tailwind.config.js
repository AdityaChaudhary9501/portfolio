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
                'brand-primary': '#6366F1',
                'brand-accent': '#06B6D4',
                'brand-emerald': '#10B981',
                'brand-purple': '#8B5CF6',
                // Sketchbook palette
                'sketch-bg': '#14120E',
                'sketch-paper': '#1C1916',
                'sketch-cream': '#F5F0DC',
                'sketch-ink': '#E8E0CC',
                'sketch-amber': '#D4A853',
                'sketch-blue': '#7EB3CC',
                'sketch-green': '#7BAE7F',
                'sketch-red': '#C4614A',
                'sketch-border': 'rgba(212, 168, 83, 0.3)',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
                'sketch': ['Caveat', 'cursive'],
                'hand': ['Kalam', 'cursive'],
            },
            keyframes: {
                'draw-in': {
                    '0%': { 'stroke-dashoffset': '1000' },
                    '100%': { 'stroke-dashoffset': '0' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '33%': { transform: 'translateY(-6px) rotate(0.5deg)' },
                    '66%': { transform: 'translateY(3px) rotate(-0.5deg)' },
                },
                'flicker': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.85' },
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 9s ease-in-out infinite',
                'flicker': 'flicker 4s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
