/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/*.js"],
    theme: {
        extend: {},
        colors: {
            'custom-color-1': 'var(--green)',
            'custom-color-2': 'var(--red)',
            'custom-color-3': 'var(--blue)',
            'custom-color-4': 'var(--gold)',
            'custom-color-5': 'var(--dark-blue)',
            'white': '#FFFFFF',
        },
    },
    plugins: [],
}

