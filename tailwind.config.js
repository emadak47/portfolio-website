/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
                circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);'
            },
            fontFamily: {
                mont: ['var(--font-mont)', ...fontFamily.sans],
            },
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
                primary: "#B63E96",
                primaryDark: "#58E6D9",
            },
        },
        screens: {
            "2xl": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
            xl: { max: "1279px" },
            lg: { max: "1023px" },
            md: { max: "767px" },
            sm: { max: "639px" },
            xs: { max: "479px" },
        }
    },
    plugins: [],
}
