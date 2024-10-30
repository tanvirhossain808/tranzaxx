/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins-Regular"],
                BebasNeue: ["BebasNeue"],
            },
            colors: {
                primary: "#00AEF0",
            },
            boxShadow: {
                custom: "0px 0px 40px 0px rgba(0, 0, 0, 0.05)",
            },
        },
    },
    plugins: [],
}
